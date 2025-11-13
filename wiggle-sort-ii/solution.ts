function wiggleSort(nums: number[]): void {
  if (nums.length <= 1) {
    return;
  }

  const sorted = [...nums].sort((a, b) => a - b);
  const mid = Math.floor((nums.length + 1) / 2);
  let left = mid - 1;
  let right = nums.length - 1;

  for (let i = 0; i < nums.length; ++i) {
    if (i % 2 === 0) {
      nums[i] = sorted[left];
      left -= 1;
    } else {
      nums[i] = sorted[right];
      right -= 1;
    }
  }
}

export { wiggleSort };

