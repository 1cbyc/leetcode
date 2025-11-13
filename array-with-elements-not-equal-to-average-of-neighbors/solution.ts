/*
 * same trick as wiggle sort lite: sort, then weave from both ends.
 * avoids clean arithmetic progressions between neighbors.
 */
function rearrangeArray(nums: number[]): number[] {
  if (nums.length <= 2) {
    return [...nums];
  }

  const sorted = [...nums].sort((a, b) => a - b);
  const mid = Math.floor((nums.length + 1) / 2);
  let left = mid - 1;
  let right = nums.length - 1;
  const result: number[] = [];

  for (let i = 0; i < nums.length; ++i) {
    if (i % 2 === 0) {
      result.push(sorted[left]);
      left -= 1;
    } else {
      result.push(sorted[right]);
      right -= 1;
    }
  }

  return result;
}

export { rearrangeArray };

