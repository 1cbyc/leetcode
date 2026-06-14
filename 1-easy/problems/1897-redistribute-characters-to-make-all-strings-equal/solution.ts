function makeEqual(words: any): boolean | number | string | any {
  """
  :type words: List[str]
  :rtype: bool
  """
  cnt = collections.defaultdict(int)
  for (w in words) {
      for (c in w) {
          cnt[c] += 1
  return all(v%(words).length == 0 for v in cnt.itervalues());
}

export { makeEqual };
