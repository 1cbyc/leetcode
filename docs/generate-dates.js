// generate dates for all problem slugs across Jan 2023 to Oct 2025
function getRandomDateInRange(slug, startDate, endDate) {
  const start = new Date(startDate).getTime();
  const end = new Date(endDate).getTime();
  // improved hash function with multiple passes for better distribution
  let hash1 = 0;
  let hash2 = 0;
  for (let i = 0; i < slug.length; i++) {
    const char = slug.charCodeAt(i);
    hash1 = ((hash1 << 5) - hash1) + char;
    hash1 = hash1 | 0;
    hash2 = hash2 * 31 + char;
    hash2 = hash2 | 0;
  }
  // combine both hashes with slug length for better distribution
  const combinedHash = Math.abs((hash1 * 31 + hash2 + slug.length * 17) | 0);
  const range = end - start;
  const randomTime = start + (combinedHash % range);
  return new Date(randomTime).toISOString().split("T")[0];
}

function slugify(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const dirs = [
  "addtwonumbers",
  "array-with-elements-not-equal-to-average-of-neighbors",
  "candy",
  "contains-duplicate-3",
  "convert-sorted-array-to-binary-search-tree",
  "count-artifacts-that-can-be-extracted",
  "count-of-range-sum",
  "create-a-dataframe-from-list",
  "design-neighbor-sum-service",
  "display-the-first-three-rows",
  "find-minimum-in-rotated-sorted-array-ii",
  "first-missing-positive",
  "game-theory",
  "get-the-size-of-a-dataframe",
  "insertion-sort-list",
  "kth-smallest-in-lexicographical-order",
  "largest-magic-square",
  "largest-palindrome-product",
  "largest-plus-sign",
  "letter-cobinations-of-a-phone-number",
  "magic-squares-in-grid",
  "matrix-block-sum",
  "max-points-on-line",
  "maximal-square",
  "maximize-area-of-square-hole-in-grid",
  "maximum-sum-of-an-hourglass",
  "maximum-xor-with-an-element-from-array",
  "median-of-two-sorted-arrays",
  "minimum-path-sum",
  "minimum-window-substring",
  "movie-rating",
  "number-of-digit-one",
  "palindrome-pairs",
  "palindrome-partitioning-ii",
  "regular-expression-matching",
  "reverse-pairs",
  "root-equals-sum-of-children",
  "russian-doll-envelopes",
  "search-a-2d-matrix",
  "select-data",
  "set-matrix-zeroes",
  "simplify-path",
  "sliding-window-median",
  "sort-colors",
  "sort-list",
  "special-array-i",
  "stamping-the-grid",
  "strong-password-checker",
  "two sum",
  "unique-paths-ii",
  "valid-number",
  "walking-robot-simulation",
  "wiggle-sort-ii",
  "wildcard-matching",
  "word-ladder",
  "word-ladder-2",
  "zuma-game",
  "C/number-of-recent-calls",
  "C/trapping-rain-water-ii",
  "Python/building-h2o",
  "Python/dungeon-game",
  "Python/method-chaining",
  "Python/palindrome-number",
  "Python/perfect-rectangle",
  "Python/poor-pigs",
  "Python/reshape-data-concatenate",
  "Python/reshape-data-melt",
  "Python/reshape-data-pivot",
  "Typescript/frog-jump",
  "Typescript/lfu-cache",
  "Typescript/split-array-largest-sum",
  "Typescript/string-compression",
];

const mapping = {};
dirs.forEach(dir => {
  const slug = slugify(dir.split("/").pop());
  const date = getRandomDateInRange(slug, "2023-01-01", "2025-10-31");
  mapping[slug] = date;
});

console.log("const POST_DATES: Record<string, string> = {");
Object.keys(mapping).sort().forEach(slug => {
  console.log(`  "${slug}": "${mapping[slug]}",`);
});
console.log("};");

