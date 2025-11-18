import { maximizeAreaOfSquareHoleInGrid } from "./maximize-area-of-square-hole-in-grid";
import { maximumSumOfAnHourglass } from "./maximum-sum-of-an-hourglass";
import { magicSquaresInGrid } from "./magic-squares-in-grid";
import { arrayWithElementsNotEqualToAverageOfNeighbors } from "./array-with-elements-not-equal-to-average-of-neighbors";
import { searchA2dMatrix } from "./search-a-2d-matrix";
import { simplifyPath } from "./simplify-path";
import { stampingTheGrid } from "./stamping-the-grid";
import { wiggleSortIi } from "./wiggle-sort-ii";
import { largestPlusSign } from "./largest-plus-sign";
import { designNeighborSumService } from "./design-neighbor-sum-service";
import { frogJump } from "./frog-jump";
import { lfuCache } from "./lfu-cache";
import { splitArrayLargestSum } from "./split-array-largest-sum";
import { stringCompression } from "./string-compression";
import { collectGeneratedPosts } from "./generated";
import { LeetCodePost, byPublishedAtDesc } from "./types";

const manualPosts: LeetCodePost[] = [
  maximizeAreaOfSquareHoleInGrid,
  magicSquaresInGrid,
  maximumSumOfAnHourglass,
  arrayWithElementsNotEqualToAverageOfNeighbors,
  searchA2dMatrix,
  simplifyPath,
  stampingTheGrid,
  wiggleSortIi,
  largestPlusSign,
  designNeighborSumService,
  frogJump,
  lfuCache,
  splitArrayLargestSum,
  stringCompression,
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


