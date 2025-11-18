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
// also include common leetcode file patterns
const ADDITIONAL_PATTERNS = [/leetcode/i, /^[a-z-]+\.(ts|py|php|cpp|c|java|go|rs|scala|js|tsx)$/i];

// hardcoded dates for all auto-generated posts (Jan 2023 - Oct 2025)
const POST_DATES: Record<string, string> = {
  "addtwonumbers": "2025-02-08",
  "array-with-elements-not-equal-to-average-of-neighbors": "2025-02-09",
  "building-h2o": "2023-07-27",
  "candy": "2025-08-26",
  "contains-duplicate-3": "2024-01-17",
  "convert-sorted-array-to-binary-search-tree": "2025-05-10",
  "count-artifacts-that-can-be-extracted": "2023-10-01",
  "count-of-range-sum": "2023-08-12",
  "create-a-dataframe-from-list": "2023-07-19",
  "design-neighbor-sum-service": "2023-09-22",
  "display-the-first-three-rows": "2023-01-09",
  "dungeon-game": "2023-11-12",
  "find-minimum-in-rotated-sorted-array-ii": "2023-08-29",
  "first-missing-positive": "2023-06-16",
  "frog-jump": "2024-02-27",
  "game-theory": "2025-09-03",
  "get-the-size-of-a-dataframe": "2023-09-23",
  "insertion-sort-list": "2024-06-05",
  "kth-smallest-in-lexicographical-order": "2024-08-02",
  "largest-magic-square": "2024-03-15",
  "largest-palindrome-product": "2025-08-01",
  "largest-plus-sign": "2025-10-14",
  "letter-cobinations-of-a-phone-number": "2023-01-01",
  "lfu-cache": "2025-04-24",
  "magic-squares-in-grid": "2023-02-20",
  "matrix-block-sum": "2023-04-10",
  "max-points-on-line": "2025-08-26",
  "maximal-square": "2025-06-13",
  "maximize-area-of-square-hole-in-grid": "2023-12-31",
  "maximum-sum-of-an-hourglass": "2024-11-18",
  "maximum-xor-with-an-element-from-array": "2025-03-22",
  "median-of-two-sorted-arrays": "2025-08-01",
  "method-chaining": "2023-04-26",
  "minimum-path-sum": "2023-08-04",
  "minimum-window-substring": "2023-11-03",
  "movie-rating": "2025-09-11",
  "number-of-digit-one": "2024-06-30",
  "number-of-recent-calls": "2025-08-17",
  "palindrome-number": "2023-04-10",
  "palindrome-pairs": "2025-03-21",
  "palindrome-partitioning-ii": "2024-07-25",
  "perfect-rectangle": "2024-04-17",
  "poor-pigs": "2023-05-05",
  "regular-expression-matching": "2024-02-27",
  "reshape-data-concatenate": "2024-11-17",
  "reshape-data-melt": "2024-11-26",
  "reshape-data-pivot": "2025-01-15",
  "reverse-pairs": "2023-11-03",
  "root-equals-sum-of-children": "2023-03-17",
  "russian-doll-envelopes": "2023-02-28",
  "search-a-2d-matrix": "2025-03-22",
  "select-data": "2024-04-25",
  "set-matrix-zeroes": "2024-09-20",
  "simplify-path": "2023-01-17",
  "sliding-window-median": "2025-02-17",
  "sort-colors": "2023-05-05",
  "sort-list": "2023-08-04",
  "special-array-i": "2025-05-02",
  "split-array-largest-sum": "2025-05-10",
  "stamping-the-grid": "2024-07-16",
  "string-compression": "2024-05-03",
  "strong-password-checker": "2024-06-22",
  "trapping-rain-water-ii": "2023-06-16",
  "two-sum": "2023-06-24",
  "unique-paths-ii": "2025-10-23",
  "valid-number": "2025-02-01",
  "walking-robot-simulation": "2025-10-23",
  "wiggle-sort-ii": "2025-10-23",
  "wildcard-matching": "2023-08-04",
  "word-ladder": "2025-04-24",
  "word-ladder-2": "2024-06-06",
  "zuma-game": "2025-09-03",
};

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

  // exclude templates and test files
  if (/template|test|spec|example/i.test(filename)) {
    return false;
  }

  // include files matching solution/problem patterns
  if (FILENAME_PATTERNS.some((pattern) => pattern.test(filename))) {
    return true;
  }

  // include leetcode-related files
  if (ADDITIONAL_PATTERNS.some((pattern) => pattern.test(filename))) {
    return true;
  }

  // if it's a code file in a problem directory (not root), include it
  // this catches files like "asteroid-collission.php" in problem directories
  return true;
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

    // use hardcoded date from mapping, fallback to a default date for new posts
    const publishedAt = POST_DATES[slug] || "2024-06-15";

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


