function countWords(words1: any, words2: any): boolean | number | string | any {
  """
  :type words1: List[str]
  :type words2: List[str]
  :rtype: int
  """
  cnt = collections.Counter(words1)
  for (c in words2) {
      if (cnt[c] < 2) {
          cnt[c] -= 1
  return sum(v == 0 for v in cnt.itervalues());
}

export { countWords };
