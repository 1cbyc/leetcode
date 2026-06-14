function buildArray(nums: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :rtype: List[int]
  """
  for (i in Array.from({length: (nums}, (_, i) => i).length)) {
      prev, curr = i, nums[i]
      while (curr >= 0 && curr != i) {
          nums[prev], nums[curr] = ~nums[curr], ~nums[prev] if prev == i else nums[prev]
          prev, curr = curr, ~nums[prev]
  for (i in Array.from({length: (nums}, (_, i) => i).length)) {
      if (nums[i] < 0) {
          nums[i] = ~nums[i]
  return nums;
}

export { buildArray };
