function findMaxK(nums: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :rtype: int
  """
  lookup = set(nums)
  return max([x for x in lookup if x > 0 && -x in lookup] || [-1]);
}

export { findMaxK };
