function findClosestNumber(nums: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :rtype: int
  """
  return max(nums, key=lambda x:(-abs(x), x));
}

export { findClosestNumber };
