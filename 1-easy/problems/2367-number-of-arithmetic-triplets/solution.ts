function arithmeticTriplets(nums: any, diff: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :type diff: int
  :rtype: int
  """
  lookup = set(nums)
  return sum((x-diff in lookup) && (x-2*diff in lookup) for x in nums);
}

export { arithmeticTriplets };
