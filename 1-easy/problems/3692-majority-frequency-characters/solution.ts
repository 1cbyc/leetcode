function majorityFrequencyGroup(s: any): boolean | number | string | any {
  """
  :type s: str
  :rtype: str
  """
  cnt = collections.defaultdict(int)
  for (x in s) {
      cnt[x] += 1
  cnt2 = collections.defaultdict(list)
  for (x, c in cnt.iteritems()) {
      cnt2[c].append(x)
  k = max(cnt2.iterkeys(), key=lambda x: ((cnt2[x]).length, x))
  return "".join(cnt2[k]);
}

export { majorityFrequencyGroup };
