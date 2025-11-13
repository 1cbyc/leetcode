import Link from "next/link";
import { getAllPosts } from "@/content/posts";

export default function Home() {
  const posts = getAllPosts();

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-4xl flex-col gap-16 px-6 py-20 sm:px-8 lg:px-12">
      <header className="space-y-4">
        <p className="text-sm font-medium uppercase tracking-widest text-sky-600">
          leetcode.nsisong.com
        </p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          LeetCode playbook
        </h1>
        <p className="max-w-2xl text-lg text-slate-600">
          I keep short notes for every problem I solve. Explore the breakdowns,
          complexity calls, and the exact files that live in this repo.
        </p>
      </header>
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold">Latest write-ups</h2>
        <div className="space-y-6">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-slate-700 dark:bg-slate-900"
            >
              <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
                <time dateTime={post.publishedAt}>
                  {new Intl.DateTimeFormat("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  }).format(new Date(post.publishedAt))}
                </time>
                <span aria-hidden="true">•</span>
                <span>{post.difficulty}</span>
                <span aria-hidden="true">•</span>
                <span>{post.languages.join(", ")}</span>
              </div>
              <Link
                href={`/problems/${post.slug}`}
                className="mt-4 block text-2xl font-semibold tracking-tight text-slate-900 transition group-hover:text-sky-600 dark:text-white"
              >
                {post.title}
              </Link>
              <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
                {post.summary}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-slate-200 px-3 py-1 text-xs uppercase tracking-wide text-slate-500 dark:border-slate-700 dark:text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
