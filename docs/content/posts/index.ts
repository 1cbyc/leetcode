import { maximizeAreaOfSquareHoleInGrid } from "./maximize-area-of-square-hole-in-grid";
import { maximumSumOfAnHourglass } from "./maximum-sum-of-an-hourglass";
import { magicSquaresInGrid } from "./magic-squares-in-grid";
import { collectGeneratedPosts } from "./generated";
import { LeetCodePost, byPublishedAtDesc } from "./types";

const manualPosts: LeetCodePost[] = [
  maximizeAreaOfSquareHoleInGrid,
  magicSquaresInGrid,
  maximumSumOfAnHourglass,
];

const manualSlugSet = new Set(manualPosts.map((post) => post.slug));

export const getAllPosts = () => {
  const generatedPosts = collectGeneratedPosts(
    manualSlugSet,
    new Set(manualSlugSet),
  );

  return [...manualPosts, ...generatedPosts].sort(byPublishedAtDesc);
};

export const getPostBySlug = (slug: string) =>
  getAllPosts().find((post) => post.slug === slug);


