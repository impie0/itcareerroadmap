import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { SearchTrigger } from "./SearchTrigger";
import { SuggestionButton } from "./SuggestionButton";
import { buildSearchIndex } from "@/lib/search-index";

export async function TopBar() {
  const index = await buildSearchIndex();
  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-2 border-b border-[--color-border] bg-[--color-bg]/85 px-5 backdrop-blur">
      <Link href="/" className="mr-2 flex items-center gap-2.5 text-[14px] font-semibold tracking-[-0.01em]">
        <span
          className="inline-block size-[18px] rounded-[4px]"
          style={{ background: "linear-gradient(135deg, var(--accent), #c4b5fd)" }}
          aria-hidden
        />
        IT Career Roadmap
      </Link>

      <SearchTrigger index={index} />

      <SuggestionButton />

      <ThemeToggle />
    </header>
  );
}
