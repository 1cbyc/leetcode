# LeetCode docs

I decided to make a documentation hub for problems I solved on my leetcode. Already deployed my site lives in `docs/` so you can access it via `docs.nsisong.com/leetcode`.

## quick start

```bash
npm install
npm run dev
```

- development: http://localhost:3000
- production build: `npm run build`
- preview locally: `npm run start`

## writing a new problem post

1. add a file inside `content/posts/` named after the desired slug, for example `content/posts/two-sum.tsx`.
2. export a `LeetCodePost` object. the `body` property returns JSX, so you can write the full article in TypeScript.
3. register the post in `content/posts/index.ts` by importing it and pushing it into the `registry` array.
4. optionally update `solutionPaths` with repo-relative file locations (they surface on the problem page).

that’s it—the homepage and problem routes are generated from the registry.

```tsx
import { LeetCodePost } from "./types";

export const twoSum: LeetCodePost = {
  slug: "two-sum",
  title: "Two Sum",
  summary: "hash map lookup to find complements on the fly.",
  publishedAt: "2024-11-13",
  difficulty: "Easy",
  languages: ["TypeScript"],
  tags: ["hash-table", "arrays"],
  solutionPaths: [
    { language: "TypeScript", path: "../two sum/solution.ts" },
  ],
  body: () => (
    <article className="space-y-4">
      <p>keep track of numbers we have seen and their indices in a map.</p>
    </article>
  ),
};
```

## deploy to vercel

1. run `npm run build` to ensure the site compiles.
2. connect the repo to Vercel and set the project root to `docs`.
3. use `npm run build` as the build command and `out` (optional) if you ever export a static build.

Every push will redeploy the documentation at `docs.nsisong.com/leetcode`. Feel free to add analytics, a custom domain, or more build steps as needed.
