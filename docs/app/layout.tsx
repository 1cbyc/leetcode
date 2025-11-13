import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
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
  title: "My LeetCode Docs — nsisong",
  description:
    "Personal notes, breakdowns, and TypeScript-first write-ups for solved LeetCode problems.",
  metadataBase: new URL("https://leetcode.nsisong.com"),
  openGraph: {
    title: "My LeetCode Docs — nsisong",
    description:
      "Personal notes, breakdowns, and TypeScript-first write-ups for solved LeetCode problems.",
    url: "https://leetcode.nsisong.com",
    siteName: "My LeetCode Docs",
  },
  twitter: {
    card: "summary_large_image",
    title: "My LeetCode Docs — nsisong",
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
              <Link href="/" className="text-lg font-semibold tracking-tight">
                My LeetCode Docs
              </Link>
              <nav className="flex items-center gap-5 text-sm text-slate-600 dark:text-slate-300">
                <a
                  href="https://leetcode.com/u/1cbyc"
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
            <div className="mx-auto flex max-w-5xl justify-center px-6 sm:px-8 lg:px-12">
              <p>&copy; 2023 Emmanuel Isaac</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
