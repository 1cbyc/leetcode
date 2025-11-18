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
import { addTwoNumbers } from "./add-two-numbers";
import { containsDuplicateIii } from "./contains-duplicate-iii";
import { countOfRangeSum } from "./count-of-range-sum";
import { firstMissingPositive } from "./first-missing-positive";
import { largestPalindromeProduct } from "./largest-palindrome-product";
import { letterCombinationsOfAPhoneNumber } from "./letter-combinations-of-a-phone-number";
import { maxPointsOnLine } from "./max-points-on-line";
import { maximalSquare } from "./maximal-square";
import { medianOfTwoSortedArrays } from "./median-of-two-sorted-arrays";
import { numberOfDigitOne } from "./number-of-digit-one";
import { regularExpressionMatching } from "./regular-expression-matching";
import { russianDollEnvelopes } from "./russian-doll-envelopes";
import { strongPasswordChecker } from "./strong-password-checker";
import { validNumber } from "./valid-number";
import { wildcardMatching } from "./wildcard-matching";
import { wordLadder } from "./word-ladder";
import { wordLadderIi } from "./word-ladder-ii";
import { twoSum } from "./two-sum";
import { candy } from "./candy";
import { convertSortedArrayToBinarySearchTree } from "./convert-sorted-array-to-binary-search-tree";
import { minimumPathSum } from "./minimum-path-sum";
import { perfectRectangle } from "./perfect-rectangle";
import { numberOfRecentCalls } from "./number-of-recent-calls";
import { trappingRainWaterIi } from "./trapping-rain-water-ii";
import { setMatrixZeroes } from "./set-matrix-zeroes";
import { buildingH2o } from "./building-h2o";
import { palindromePairs } from "./palindrome-pairs";
import { reversePairs } from "./reverse-pairs";
import { slidingWindowMedian } from "./sliding-window-median";
import { zumaGame } from "./zuma-game";
import { uniquePathsIi } from "./unique-paths-ii";
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
  addTwoNumbers,
  containsDuplicateIii,
  countOfRangeSum,
  firstMissingPositive,
  largestPalindromeProduct,
  letterCombinationsOfAPhoneNumber,
  maxPointsOnLine,
  maximalSquare,
  medianOfTwoSortedArrays,
  numberOfDigitOne,
  regularExpressionMatching,
  russianDollEnvelopes,
  strongPasswordChecker,
  validNumber,
  wildcardMatching,
  wordLadder,
  wordLadderIi,
  twoSum,
  candy,
  convertSortedArrayToBinarySearchTree,
  minimumPathSum,
  perfectRectangle,
  numberOfRecentCalls,
  trappingRainWaterIi,
  setMatrixZeroes,
  buildingH2o,
  palindromePairs,
  reversePairs,
  slidingWindowMedian,
  zumaGame,
  uniquePathsIi,
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


