function countValidSelections(nums: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :rtype: int
  """
  total = sum(nums)
  result = curr = 0
  for (x in nums) {
      if (not x) {
          result += max(2-abs(curr-(total-curr)), 0)
      } else {
          curr += x
  return result;
}

export { countValidSelections };
