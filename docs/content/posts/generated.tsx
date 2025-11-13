import fs from "fs";
import path from "path";
import type { LeetCodePost } from "./types";

type ProblemData = {
  dirRel: string;
  files: Array<{
    language: string;
    relPath: string;
    mtime: number;
    label: string;
  }>;
};

const LANGUAGE_BY_EXTENSION: Record<string, string> = {
  ".ts": "TypeScript",
  ".tsx": "TypeScript",
  ".js": "JavaScript",
  ".py": "Python",
  ".php": "PHP",
  ".c": "C",
  ".cpp": "C++",
  ".go": "Go",
  ".rs": "Rust",
  ".scala": "Scala",
  ".java": "Java",
  ".sql": "SQL",
  ".erl": "Erlang",
  ".ex": "Elixir",
  ".rb": "Ruby",
  ".kt": "Kotlin",
  ".swift": "Swift",
};

const FILENAME_PATTERNS = [/^solution/i, /^problem-/i];

const IGNORED_DIR_NAMES = new Set([
  ".git",
  ".github",
  ".vscode",
  ".idea",
  "node_modules",
  ".turbo",
  ".next",
  ".vercel",
  "docs",
  ".husky",
  ".cache",
  "dist",
  "build",
  "docs/.next",
]);

const ROOT_DIR = path.resolve(process.cwd(), "..");

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const titleCase = (value: string) =>
  value
    .replace(/[-_]+/g, " ")
    .split(" ")
    .filter(Boolean)
    .map((segment) => segment[0]?.toUpperCase() + segment.slice(1))
    .join(" ");

const shouldIncludeFile = (filename: string, ext: string) => {
  if (!LANGUAGE_BY_EXTENSION[ext]) {
    return false;
  }

  return FILENAME_PATTERNS.some((pattern) => pattern.test(filename));
};

const walkForProblems = () => {
  const problems = new Map<string, ProblemData>();

  const walk = (dirRel: string) => {
    const dirAbs = path.join(ROOT_DIR, dirRel);
    let entries: fs.Dirent[] = [];
    try {
      entries = fs.readdirSync(dirAbs, { withFileTypes: true });
    } catch {
      return;
    }

    for (const entry of entries) {
      if (entry.name.startsWith(".")) {
        continue;
      }

      const childRel = path.join(dirRel, entry.name);

      if (entry.isDirectory()) {
        if (IGNORED_DIR_NAMES.has(entry.name)) {
          continue;
        }
        walk(childRel);
        continue;
      }

      if (!entry.isFile()) {
        continue;
      }

      const ext = path.extname(entry.name).toLowerCase();
      const filename = entry.name.toLowerCase();

      if (!shouldIncludeFile(filename, ext)) {
        continue;
      }

      const problemDirRel = dirRel;
      if (!problems.has(problemDirRel)) {
        problems.set(problemDirRel, {
          dirRel: problemDirRel,
          files: [],
        });
      }

      const problem = problems.get(problemDirRel)!;
      const language = LANGUAGE_BY_EXTENSION[ext];
      const relPath = path
        .join(problemDirRel, entry.name)
        .replace(/\\/g, "/");
      const absPath = path.join(ROOT_DIR, relPath);
      let mtime = Date.now();
      try {
        const stats = fs.statSync(absPath);
        mtime = stats.mtime.getTime();
      } catch {
        // ignore stat errors
      }

      problem.files.push({
        language,
        relPath,
        mtime,
        label: entry.name,
      });
    }
  };

  walk(".");

  return problems;
};

export const collectGeneratedPosts = (
  excludedSlugs: Set<string>,
  knownSlugs: Set<string>,
): LeetCodePost[] => {
  const problemMap = walkForProblems();
  const posts: LeetCodePost[] = [];

  for (const problem of problemMap.values()) {
    if (!problem.files.length) {
      continue;
    }

    const segments = problem.dirRel
      .replace(/\\/g, "/")
      .split("/")
      .filter((segment) => segment && segment !== ".");

    if (!segments.length) {
      continue;
    }

    const primarySegment = segments[segments.length - 1];
    let slug = slugify(primarySegment);
    const fallbackSlug = slugify(segments.join("-"));

    const ensureUniqueSlug = () => {
      if (!slug) {
        slug = fallbackSlug || slugify(`problem-${posts.length + 1}`);
      }

      if (excludedSlugs.has(slug) || knownSlugs.has(slug)) {
        slug = fallbackSlug || `${slug}-${posts.length + 1}`;
      }

      let suffix = 2;
      while (excludedSlugs.has(slug) || knownSlugs.has(slug)) {
        slug = `${fallbackSlug || slug}-${suffix}`;
        suffix += 1;
      }
    };

    ensureUniqueSlug();
    knownSlugs.add(slug);

    const title = titleCase(primarySegment || slug);

    const languages = Array.from(
      new Set(problem.files.map((file) => file.language)),
    ).sort();

    const earliestMtime = Math.min(...problem.files.map((file) => file.mtime));
    const publishedAt = new Date(earliestMtime)
      .toISOString()
      .split("T")[0];

    posts.push({
      slug,
      title,
      summary: `quick reference for ${title.toLowerCase()}. more notes soon.`,
      publishedAt,
      difficulty: "Unknown",
      languages,
      tags: languages.map((language) => language.toLowerCase()),
      solutionPaths: problem.files
        .sort((a, b) => a.relPath.localeCompare(b.relPath))
        .map((file) => ({
          label: file.label,
          language: file.language,
          path: file.relPath,
        })),
      estimatedReadingMinutes: 1,
      body: () => (
        <article className="space-y-6">
          <section className="space-y-3">
            <p>
              auto-generated entry for {title}. more detailed notes will be
              added soon. the solutions below link to files in this repository.
            </p>
            <p>
              languages covered:{" "}
              <span className="font-medium">{languages.join(", ")}</span>.
            </p>
          </section>
          <section className="space-y-3">
            <h2 className="text-xl font-semibold">solution files</h2>
            <ul className="list-disc space-y-2 pl-5">
              {problem.files.map((file) => (
                <li key={file.relPath}>
                  <span className="font-medium">{file.language}</span>{" "}
                  <code className="rounded bg-slate-100 px-2 py-1 text-xs dark:bg-slate-800">
                    {file.relPath}
                  </code>
                </li>
              ))}
            </ul>
          </section>
        </article>
      ),
    });
  }

  return posts.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
};


