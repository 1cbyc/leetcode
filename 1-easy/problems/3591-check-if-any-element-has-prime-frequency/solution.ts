function checkPrimeFrequency(nums: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :rtype: bool
  """
  cnt = collections.defaultdict(int)
  for (x in nums) {
      cnt[x] += 1
  return any(SPF[v] == v for v in cnt.itervalues());
}

export { checkPrimeFrequency };
