import { TopBar } from "./TopBar";
import { Sidebar } from "./Sidebar";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TopBar />
      <div className="grid min-h-[calc(100dvh-56px)] grid-cols-1 lg:grid-cols-[240px_1fr]">
        <Sidebar />
        <div className="min-w-0">{children}</div>
      </div>
    </>
  );
}
