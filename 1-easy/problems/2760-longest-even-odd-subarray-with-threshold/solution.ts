function longestAlternatingSubarray(nums: any, threshold: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :type threshold: int
  :rtype: int
  """
  result = l = 0
  for (x in nums) {
      if (x > threshold) {
          l = 0
          continue
      if (l%2 == x%2) {
          l += 1
      } else {
          l = int(x%2 == 0)
      result = max(result, l)
  return result;
}

export { longestAlternatingSubarray };
