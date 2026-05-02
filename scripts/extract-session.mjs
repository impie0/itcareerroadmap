#!/usr/bin/env node
// Read a Claude Code session .jsonl and emit a readable markdown transcript:
//   - user prompts in full
//   - assistant text replies in full
//   - tool calls collapsed to one line each (name + first 80 chars of input)
//   - tool results / system reminders / task notifications dropped
//
// Usage: node scripts/extract-session.mjs <session.jsonl> > transcript.md

import fs from "node:fs";
import path from "node:path";

const file = process.argv[2];
if (!file) {
  console.error("usage: node extract-session.mjs <session.jsonl>");
  process.exit(2);
}

const lines = fs.readFileSync(file, "utf8").split("\n");
const out = [];
out.push(`# Transcript: ${path.basename(file)}`);
out.push("");

let turnNum = 0;

function clip(s, n = 240) {
  if (!s) return "";
  s = String(s).replace(/\s+/g, " ").trim();
  return s.length > n ? s.slice(0, n) + "…" : s;
}

for (const line of lines) {
  if (!line.trim()) continue;
  let d;
  try { d = JSON.parse(line); } catch { continue; }

  const ts = (d.timestamp || "").slice(0, 19);

  if (d.type === "user") {
    const c = d.message?.content;
    let txt = "";
    if (typeof c === "string") txt = c;
    else if (Array.isArray(c)) {
      for (const x of c) {
        if (x.type === "text" && x.text) txt += x.text + "\n";
      }
    }
    if (!txt) continue;
    // Skip tool_result / system noise
    if (txt.includes("<task-notification>")) continue;
    if (txt.startsWith("[{") || txt.startsWith("{\"")) continue;
    if (txt.includes("tool_use_id") && txt.length < 500) continue;
    if (txt.includes("<system-reminder>") && txt.length < 800) continue;
    turnNum++;
    out.push(`---`);
    out.push(`### [${turnNum}] USER · ${ts}`);
    out.push("");
    out.push(txt.trim());
    out.push("");
  } else if (d.type === "assistant") {
    const c = d.message?.content;
    if (!Array.isArray(c)) continue;
    const textBits = [];
    const toolCalls = [];
    for (const x of c) {
      if (x.type === "text" && x.text) textBits.push(x.text);
      else if (x.type === "tool_use") {
        const name = x.name;
        const input = JSON.stringify(x.input || {});
        toolCalls.push(`\`${name}\` — ${clip(input, 140)}`);
      }
    }
    if (textBits.length === 0 && toolCalls.length === 0) continue;
    out.push(`### ASSISTANT · ${ts}`);
    out.push("");
    if (textBits.length) {
      out.push(textBits.join("\n").trim());
      out.push("");
    }
    if (toolCalls.length) {
      for (const t of toolCalls) out.push(`  → ${t}`);
      out.push("");
    }
  }
}

process.stdout.write(out.join("\n"));
