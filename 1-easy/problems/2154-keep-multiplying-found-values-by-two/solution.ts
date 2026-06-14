function findFinalValue(nums: any, original: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :type original: int
  :rtype: int
  """
  lookup = set(nums)
  while (original in lookup) {
      original *= 2
  return original;
}

export { findFinalValue };
