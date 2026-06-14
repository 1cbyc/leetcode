function sumOfUnique(nums: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :rtype: int
  """
  return sum(x for x, c in collections.Counter(nums).iteritems() if c == 1);
}

export { sumOfUnique };
