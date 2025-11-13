import { maximizeAreaOfSquareHoleInGrid } from "./maximize-area-of-square-hole-in-grid";
import { maximumSumOfAnHourglass } from "./maximum-sum-of-an-hourglass";
import { LeetCodePost, byPublishedAtDesc } from "./types";

const registry: LeetCodePost[] = [
  maximizeAreaOfSquareHoleInGrid,
  maximumSumOfAnHourglass,
];

export const getAllPosts = () => [...registry].sort(byPublishedAtDesc);

export const getPostBySlug = (slug: string) =>
  registry.find((post) => post.slug === slug);


