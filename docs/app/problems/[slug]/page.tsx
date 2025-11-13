import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllPosts, getPostBySlug } from "@/content/posts";

type Params = {
  slug: string;
};

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Problem not found",
    };
  }

  return {
    title: `${post.title} — LeetCode docs`,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
    },
  };
}

export default async function ProblemPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const Body = post.body;

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col gap-12 px-6 py-16 sm:px-8 lg:px-0">
      <section className="space-y-4">
        <Link
          href="/"
          className="text-sm uppercase tracking-[0.2em] text-sky-600 transition hover:text-sky-500"
        >
          ← Back to index
        </Link>
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
          {post.estimatedReadingMinutes ? (
            <>
              <span aria-hidden="true">•</span>
              <span>{post.estimatedReadingMinutes} min read</span>
            </>
          ) : null}
        </div>
        <h1 className="text-4xl font-semibold tracking-tight">{post.title}</h1>
        <p className="text-lg text-slate-600 dark:text-slate-300">
          {post.summary}
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-slate-200 px-3 py-1 text-xs uppercase tracking-wide text-slate-500 dark:border-slate-700 dark:text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>
      {post.leetCodeLink ? (
        <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900">
          <h2 className="text-lg font-semibold">Problem link</h2>
          <a
            href={post.leetCodeLink}
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-flex items-center gap-2 text-sky-600 underline decoration-dotted underline-offset-4 transition hover:text-sky-500"
          >
            View on LeetCode
          </a>
        </section>
      ) : null}
      {post.solutionPaths.length ? (
        <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900">
          <h2 className="text-lg font-semibold">Solutions in this repo</h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
            {post.solutionPaths.map((solution) => (
              <li
                key={`${solution.language}-${solution.path}`}
                className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3"
              >
                <span className="font-medium text-slate-700 dark:text-slate-200">
                  {solution.language}
                </span>
                <span className="hidden sm:inline" aria-hidden="true">
                  —
                </span>
                <code className="w-fit rounded bg-slate-100 px-2 py-1 text-xs dark:bg-slate-800">
                  {solution.path}
                </code>
                {solution.label ? (
                  <span className="text-xs uppercase tracking-wide text-slate-400">
                    {solution.label}
                  </span>
                ) : null}
              </li>
            ))}
          </ul>
        </section>
      ) : null}
      <section className="space-y-6 text-base leading-relaxed text-slate-700 dark:text-slate-200">
        <Body />
      </section>
    </main>
  );
}


