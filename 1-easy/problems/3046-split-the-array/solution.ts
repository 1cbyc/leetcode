function isPossibleToSplit(nums: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :rtype: bool
  """
  return all(v <= 2 for v in collections.Counter(nums).itervalues());
}

export { isPossibleToSplit };
