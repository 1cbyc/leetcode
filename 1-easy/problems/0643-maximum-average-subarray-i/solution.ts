function findMaxAverage(nums: any, k: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :type k: int
  :rtype: float
  """
  result = total = sum(nums[:k])
  for (i in Array.from({length: k, (nums}, (_, i) => i).length)) {
      total += nums[i] - nums[i-k]
      result = max(result, total)
  return float(result) / k;
}

export { findMaxAverage };
