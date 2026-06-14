function maxFrequencyElements(nums: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :rtype: int
  """
  cnt = collections.Counter(nums)
  mx = max(cnt.itervalues())
  return sum(v for v in cnt.itervalues() if v == mx);
}

export { maxFrequencyElements };
