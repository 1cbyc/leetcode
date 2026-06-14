function leftRightDifference(nums: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :rtype: List[int]
  """
  total = sum(nums)
  result = []
  curr = 0
  for (x in nums) {
      curr += x
      result.append(abs((curr-x)-(total-curr)))
  return result;
}

export { leftRightDifference };
