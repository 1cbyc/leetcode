import { maximizeAreaOfSquareHoleInGrid } from "./maximize-area-of-square-hole-in-grid";
import { maximumSumOfAnHourglass } from "./maximum-sum-of-an-hourglass";
import { magicSquaresInGrid } from "./magic-squares-in-grid";
import { LeetCodePost, byPublishedAtDesc } from "./types";

const registry: LeetCodePost[] = [
  maximizeAreaOfSquareHoleInGrid,
  magicSquaresInGrid,
  maximumSumOfAnHourglass,
];

export const getAllPosts = () => [...registry].sort(byPublishedAtDesc);

export const getPostBySlug = (slug: string) =>
  registry.find((post) => post.slug === slug);


