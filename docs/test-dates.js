// quick test to check date randomization
function getRandomDateInLastTwoYears(slug) {
  const now = Date.now();
  const twoYearsAgo = now - 2 * 365 * 24 * 60 * 60 * 1000;
  // improved hash function for better distribution
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    const char = slug.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash | 0; // convert to 32-bit integer
  }
  // use a second hash pass for better distribution
  hash = hash * 31 + slug.length;
  hash = hash | 0;
  const range = now - twoYearsAgo;
  const randomTime = twoYearsAgo + (Math.abs(hash) % range);
  return new Date(randomTime).toISOString().split("T")[0];
}

// test with some sample slugs from the repo
const testSlugs = [
  "unique-paths-ii",
  "valid-number",
  "walking-robot-simulation",
  "wiggle-sort-ii",
  "two-sum",
  "median-of-two-sorted-arrays",
  "palindrome-number",
  "reverse-pairs",
  "dungeon-game",
  "maximum-xor-with-an-element-from-array",
  "first-missing-positive",
  "letter-cobinations-of-a-phone-number",
  "max-points-on-line",
  "regular-expression-matching",
  "word-ladder",
  "zuma-game",
  "sort-colors",
  "create-a-dataframe-from-list",
  "largest-magic-square",
  "minimum-window-substring"
];

console.log("Testing date randomization:\n");
testSlugs.forEach(slug => {
  const date = getRandomDateInLastTwoYears(slug);
  console.log(`${slug.padEnd(35)} -> ${date}`);
});

console.log("\nChecking for duplicates...");
const dates = testSlugs.map(slug => getRandomDateInLastTwoYears(slug));
const uniqueDates = new Set(dates);
console.log(`Unique dates: ${uniqueDates.size} out of ${dates.length} test slugs`);

