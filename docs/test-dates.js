// quick test to check date randomization
function getRandomDateInLastTwoYears(slug) {
  const now = Date.now();
  const twoYearsAgo = now - 2 * 365 * 24 * 60 * 60 * 1000;
  // simple hash of slug for deterministic randomness
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = (hash << 5) - hash + slug.charCodeAt(i);
    hash = hash & hash; // convert to 32-bit integer
  }
  const range = now - twoYearsAgo;
  const randomTime = twoYearsAgo + (Math.abs(hash) % range);
  return new Date(randomTime).toISOString().split("T")[0];
}

// test with some sample slugs
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
  "maximum-xor-with-an-element-from-array"
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

