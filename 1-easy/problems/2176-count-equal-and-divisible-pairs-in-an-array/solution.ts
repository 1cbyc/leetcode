function countPairs(nums: any, k: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :type k: int
  :rtype: int
  """
  def gcd(x, y):
      while (y) {
          x, y = y, x%y
      return x;

  idxs = collections.defaultdict(list)
  for (i, x in enumerate(nums)) {
      idxs[x].append(i)
  result = 0
  for (idx in idxs.itervalues()) {
      gcds = collections.Counter()
      for (i in idx) {
          gcd_i = gcd(i, k)
          result += sum(cnt for gcd_j, cnt in gcds.iteritems() if gcd_i*gcd_j%k == 0)
          gcds[gcd_i] += 1
  return result;
}

export { countPairs };
