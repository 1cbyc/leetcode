function maximumDifference(nums: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :rtype: int
  """
  result, prefix = 0, float("inf")
  for (x in nums) {
      result = max(result, x-prefix)
      prefix = min(prefix, x)
  return result if result else -1;
}

export { maximumDifference };
