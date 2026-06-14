function hasTrailingZeros(nums: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :rtype: bool
  """
  return sum(x%2 == 0 for x in nums) >= 2;
}

export { hasTrailingZeros };
