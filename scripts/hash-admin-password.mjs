#!/usr/bin/env node
/* Generate an ADMIN_PASSWORD_HASH for .env without ever writing the plaintext
   to disk or shell history. Run with `node scripts/hash-admin-password.mjs`
   and type the password at the prompt. */

import { scryptSync, randomBytes } from "node:crypto";
import readline from "node:readline";

const SCRYPT_KEYLEN = 32;
const SCRYPT_PARAMS = { N: 16384, r: 8, p: 1 };

function prompt(question, opts = { hidden: false }) {
  return new Promise((resolve) => {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout, terminal: true });
    if (opts.hidden) {
      // Quick hidden-input shim for terminals
      const stdin = process.stdin;
      let value = "";
      process.stdout.write(question);
      stdin.setRawMode?.(true);
      stdin.resume();
      stdin.setEncoding("utf8");
      const onKey = (key) => {
        if (key === "\r" || key === "\n" || key === "") {
          stdin.setRawMode?.(false);
          stdin.pause();
          stdin.removeListener("data", onKey);
          process.stdout.write("\n");
          rl.close();
          resolve(value);
        } else if (key === "") { // ctrl-c
          process.exit(1);
        } else if (key === "") { // backspace
          value = value.slice(0, -1);
        } else {
          value += key;
        }
      };
      stdin.on("data", onKey);
    } else {
      rl.question(question, (answer) => {
        rl.close();
        resolve(answer);
      });
    }
  });
}

const password = await prompt("Admin password: ", { hidden: true });
const confirm = await prompt("Confirm password: ", { hidden: true });

if (password !== confirm) {
  console.error("× Passwords do not match");
  process.exit(1);
}
if (password.length < 12) {
  console.error("× Password must be at least 12 characters");
  process.exit(1);
}

const salt = randomBytes(16);
const hash = scryptSync(password.normalize("NFKC"), salt, SCRYPT_KEYLEN, SCRYPT_PARAMS);
const stored = `scrypt$${salt.toString("hex")}$${hash.toString("hex")}`;

const sessionSecret = randomBytes(32).toString("hex");

console.log("");
console.log("Add these two lines to your .env:");
console.log("");
console.log(`ADMIN_PASSWORD_HASH="${stored}"`);
console.log(`SESSION_SECRET="${sessionSecret}"`);
console.log("");
console.log("Then restart the web container:  docker compose up -d web");
