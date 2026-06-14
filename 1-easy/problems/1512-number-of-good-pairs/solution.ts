function numIdenticalPairs(nums: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :rtype: int
  """
  return sum(c*(c-1)//2 for c in collections.Counter(nums).itervalues());
}

export { numIdenticalPairs };
