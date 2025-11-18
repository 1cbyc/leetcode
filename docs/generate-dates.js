// generate dates for all problem slugs
function getRandomDateInLastTwoYears(slug) {
  const now = Date.now();
  const twoYearsAgo = now - 2 * 365 * 24 * 60 * 60 * 1000;
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    const char = slug.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash | 0;
  }
  hash = hash * 31 + slug.length;
  hash = hash | 0;
  const range = now - twoYearsAgo;
  const randomTime = twoYearsAgo + (Math.abs(hash) % range);
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
  const date = getRandomDateInLastTwoYears(slug);
  mapping[slug] = date;
});

console.log("const POST_DATES: Record<string, string> = {");
Object.keys(mapping).sort().forEach(slug => {
  console.log(`  "${slug}": "${mapping[slug]}",`);
});
console.log("};");

