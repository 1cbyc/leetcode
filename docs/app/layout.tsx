import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LeetCode Docs — nsisong",
  description:
    "Personal notes, breakdowns, and TypeScript-first write-ups for solved LeetCode problems.",
  metadataBase: new URL("https://docs.nsisong.com/leetcode"),
  openGraph: {
    title: "LeetCode Docs — nsisong",
    description:
      "Personal notes, breakdowns, and TypeScript-first write-ups for solved LeetCode problems.",
    url: "https://docs.nsisong.com/leetcode",
    siteName: "docs.nsisong.com/leetcode",
  },
  twitter: {
    card: "summary_large_image",
    title: "LeetCode Docs — nsisong",
    description:
      "Personal notes, breakdowns, and TypeScript-first write-ups for solved LeetCode problems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} bg-slate-50 text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-50`}>
        <div className="min-h-screen">
          <header className="border-b border-slate-200 bg-white/70 backdrop-blur dark:border-slate-800 dark:bg-slate-950/70">
            <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5 sm:px-8 lg:px-12">
              <a href="/" className="text-lg font-semibold tracking-tight">
                docs.nsisong.com/leetcode
              </a>
              <nav className="flex items-center gap-5 text-sm text-slate-600 dark:text-slate-300">
                <a
                  href="https://leetcode.com"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-sky-600"
                >
                  LeetCode
                </a>
                <a
                  href="https://vercel.com/dashboard"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-sky-600"
                >
                  Vercel
                </a>
              </nav>
            </div>
          </header>
          {children}
          <footer className="border-t border-slate-200 bg-white/70 py-8 text-sm text-slate-500 dark:border-slate-800 dark:bg-slate-950/70 dark:text-slate-400">
            <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
              <p>Made with Next.js and Tailwind CSS.</p>
              <p>Deploy to Vercel with `npm run build` → `npm run start`.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
