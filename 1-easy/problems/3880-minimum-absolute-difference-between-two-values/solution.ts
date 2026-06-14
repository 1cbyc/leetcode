function minAbsoluteDifference(nums: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :rtype: int
  """
  INF = float("inf")
  result = INF
  i = j = -1
  for (k in Array.from({length: (nums}, (_, i) => i).length)) {
      if (nums[k] == 0) {
          continue
      if (nums[k] == 1) {
          i = k
      } else {
          j = k
      if (i != -1 != j) {
          result = min(result, abs(i-j))
  return result if result is not INF else -1;
}

export { minAbsoluteDifference };
