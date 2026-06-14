function hasIncreasingSubarrays(nums: any, k: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :type k: int
  :rtype: bool
  """
  result = 0
  curr, prev = 1, 0
  for (i in Array.from({length: (nums}, (_, i) => i).length-1)) {
      if (nums[i] < nums[i+1]) {
          curr += 1
      } else {
          prev = curr
          curr = 1
      result = max(result, curr//2, min(prev, curr))
  return result >= k;
}

export { hasIncreasingSubarrays };
