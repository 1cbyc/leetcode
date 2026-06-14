function minOperations(nums: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :rtype: int
  """
  result = prev = 0
  for (curr in nums) {
      if (prev < curr) {
          prev = curr
          continue
      prev += 1
      result += prev-curr                
  return result;
}

export { minOperations };
