import type { CertLinkIndex } from "./cert-link-index";

/**
 * Pre-processes a markdown string and wraps standalone cert-code mentions in
 * markdown links pointing at /cert/[vendor]/[code]. Skips:
 *  - fenced code blocks (```...```)
 *  - inline code (`...`)
 *  - existing markdown links ([text](url)) and images (![alt](url))
 *
 * Idempotent — running it twice produces the same output (the second pass
 * sees the codes already wrapped in [..]() and skips them).
 */
export function applyCertAutoLinks(markdown: string, index: CertLinkIndex): string {
  if (!index.pattern || index.map.size === 0) return markdown;

  const re = new RegExp(index.pattern.source, index.pattern.flags);
  const map = index.map;

  let out = "";
  let i = 0;
  const n = markdown.length;

  while (i < n) {
    const ch = markdown[i];

    // Fenced code block: ``` ... ```
    if (markdown.startsWith("```", i)) {
      const end = markdown.indexOf("```", i + 3);
      if (end === -1) {
        out += markdown.slice(i);
        break;
      }
      out += markdown.slice(i, end + 3);
      i = end + 3;
      continue;
    }

    // Inline code: `...`
    if (ch === "`") {
      const end = markdown.indexOf("`", i + 1);
      if (end === -1) {
        out += markdown.slice(i);
        break;
      }
      out += markdown.slice(i, end + 1);
      i = end + 1;
      continue;
    }

    // Image: ![alt](url) — same skip as link
    // Markdown link: [text](url)
    if (ch === "[" || (ch === "!" && markdown[i + 1] === "[")) {
      const linkStart = ch === "!" ? i + 1 : i;
      // Find matching ]
      let depth = 1;
      let j = linkStart + 1;
      while (j < n && depth > 0) {
        const c = markdown[j];
        if (c === "[") depth++;
        else if (c === "]") depth--;
        if (depth === 0) break;
        j++;
      }
      if (j < n && markdown[j + 1] === "(") {
        // Find matching )
        let pd = 1;
        let k = j + 2;
        while (k < n && pd > 0) {
          const c = markdown[k];
          if (c === "(") pd++;
          else if (c === ")") pd--;
          if (pd === 0) break;
          k++;
        }
        // Whole [text](url) (including possible ! prefix) passes through unchanged
        out += markdown.slice(i, k + 1);
        i = k + 1;
        continue;
      }
      // [text] without (...) — copy the bracket and continue char-by-char
      out += ch;
      i++;
      continue;
    }

    // Walk forward to next special char, accumulating a plain segment to regex over
    let j = i;
    while (j < n) {
      const c = markdown[j];
      if (c === "`" || c === "[" || (c === "!" && markdown[j + 1] === "[") || markdown.startsWith("```", j)) break;
      j++;
    }
    const segment = markdown.slice(i, j);
    out += segment.replace(re, (match) => {
      const url = map.get(match.toLowerCase());
      return url ? `[${match}](${url})` : match;
    });
    i = j;
  }

  return out;
}
