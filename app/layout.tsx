import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { PageShell } from "@/components/chrome/PageShell";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "IT Career Roadmap",
  description:
    "Self-hostable, citation-backed IT career reference. 12 domains, 261 verified certifications, 64 transition guides, 24 role profiles.",
};

const themeBootScript = `
(function(){
  try {
    var stored = localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') {
      document.documentElement.setAttribute('data-theme', stored);
    }
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootScript }} />
      </head>
      <body>
        <PageShell>{children}</PageShell>
      </body>
    </html>
  );
}
