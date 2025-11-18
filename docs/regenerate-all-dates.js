// script to find all problems and generate dates for them
const fs = require("fs");
const path = require("path");

const LANGUAGE_BY_EXTENSION = {
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
const ADDITIONAL_PATTERNS = [/leetcode/i, /^[a-z-]+\.(ts|py|php|cpp|c|java|go|rs|scala|js|tsx)$/i];

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
  // language folders that contain multiple problems
  "Python",
  "PHP",
  "Typescript",
  "TypeScript",
  "C",
  "Elixir",
]);

const ROOT_DIR = path.resolve(__dirname, "..");

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function shouldIncludeFile(filename, ext, dirRel) {
  if (!LANGUAGE_BY_EXTENSION[ext]) {
    return false;
  }

  if (/template|test|spec|example|new_problem/i.test(filename)) {
    return false;
  }

  if (dirRel === ".") {
    return false;
  }

  if (FILENAME_PATTERNS.some((pattern) => pattern.test(filename))) {
    return true;
  }

  if (ADDITIONAL_PATTERNS.some((pattern) => pattern.test(filename))) {
    return true;
  }

  return true;
}

function getRandomDateInRange(slug, startDate, endDate) {
  const start = new Date(startDate).getTime();
  const end = new Date(endDate).getTime();
  const range = end - start;
  
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = ((hash << 5) - hash) + slug.charCodeAt(i);
    hash = hash | 0;
  }
  
  let hash2 = 0;
  for (let i = 0; i < slug.length; i++) {
    hash2 = hash2 * 31 + slug.charCodeAt(i);
    hash2 = hash2 | 0;
  }
  
  const combined = Math.abs((hash * 2654435761 + hash2 * 2246822519) | 0);
  const position = combined % 1000;
  const jitter = (combined * 982451653) % (range / 1000);
  const randomTime = start + (position * (range / 1000)) + jitter;
  return new Date(randomTime).toISOString().split("T")[0];
}

function walkForProblems() {
  const problems = new Map();

  const walk = (dirRel) => {
    const dirAbs = path.join(ROOT_DIR, dirRel);
    let entries = [];
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

      if (!shouldIncludeFile(filename, ext, dirRel)) {
        continue;
      }

      const problemDirRel = dirRel;
      if (!problems.has(problemDirRel)) {
        problems.set(problemDirRel, {
          dirRel: problemDirRel,
          files: [],
        });
      }

      const problem = problems.get(problemDirRel);
      const language = LANGUAGE_BY_EXTENSION[ext];
      const relPath = path.join(problemDirRel, entry.name).replace(/\\/g, "/");

      let mtime = Date.now();
      try {
        const stats = fs.statSync(path.join(ROOT_DIR, relPath));
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
}

// find all problems
const problemMap = walkForProblems();
const slugs = new Set();

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
  const slug = slugify(primarySegment);
  slugs.add(slug);
}

// generate dates for all slugs
const mapping = {};
const sortedSlugs = Array.from(slugs).sort();
sortedSlugs.forEach(slug => {
  const date = getRandomDateInRange(slug, "2023-01-01", "2025-10-31");
  mapping[slug] = date;
});

console.log(`Found ${sortedSlugs.length} problems\n`);
console.log("const POST_DATES: Record<string, string> = {");
sortedSlugs.forEach(slug => {
  console.log(`  "${slug}": "${mapping[slug]}",`);
});
console.log("};");

