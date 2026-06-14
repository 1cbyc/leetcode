function returnToBoundaryCount(nums: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :rtype: int
  """
  result = curr = 0
  for (x in nums) {
      curr += x
      if (curr == 0) {
          result += 1
  return result;
}

export { returnToBoundaryCount };
