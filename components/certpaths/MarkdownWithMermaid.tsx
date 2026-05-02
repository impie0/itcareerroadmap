"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Mermaid } from "@/components/ui/Mermaid";

/**
 * Wraps ReactMarkdown so that ```mermaid code blocks render as Mermaid SVGs
 * via the lazy-loaded Mermaid client component. Other code blocks render
 * normally. Matches the wiki-prose styling used elsewhere in the app.
 */
export function MarkdownWithMermaid({ markdown }: { markdown: string }) {
  return (
    <div className="wiki-prose">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          code({ className, children, ...rest }) {
            const lang = /language-(\w+)/.exec(className ?? "")?.[1];
            if (lang === "mermaid") {
              return <Mermaid code={String(children).replace(/\n$/, "")} />;
            }
            return <code className={className} {...rest}>{children}</code>;
          },
        }}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
}
