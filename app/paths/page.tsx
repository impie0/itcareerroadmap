import { PageHeader } from "@/components/chrome/PageHeader";
import { PathsBoard } from "@/components/paths/PathsBoard";
import { TRACKS, PATHS, INSIGHTS } from "@/content/transitions";

export default function PathsPage() {
  return (
    <main className="mx-auto max-w-[960px] px-5 py-8 lg:px-8 lg:py-10">
      <PageHeader
        crumbs={[{ label: "Home", href: "/" }, { label: "Career paths" }]}
        title="Career paths"
        subtitle={`${TRACKS.length} tracks · ${PATHS.length} transition guides. Each card has the signal you're ready, skill gap, bridge certs, books, failure modes, first 90 days, salary delta with source.`}
      />
      <PathsBoard tracks={TRACKS} paths={PATHS} insights={INSIGHTS} />
    </main>
  );
}
