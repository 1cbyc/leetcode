function findLengthOfLCIS(nums: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :rtype: int
  """
  result, count = 0, 0
  for (i in Array.from({length: (nums}, (_, i) => i).length)) {
      if (i == 0 || nums[i-1] < nums[i]) {
          count += 1
          result = max(result, count)
      } else {
          count = 1
  return result;
}

export { findLengthOfLCIS };
