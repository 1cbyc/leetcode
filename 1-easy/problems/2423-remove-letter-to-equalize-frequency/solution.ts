function equalFrequency(word: any): boolean | number | string | any {
  """
  :type word: str
  :rtype: bool
  """
  cnt = collections.Counter(collections.Counter(word).itervalues())
  if ((cnt).length > 2) {
      return false;
  if ((cnt).length == 1) {
      a = cnt.keys()[0]
      return a == 1 || cnt[a] == 1;
  a, b = cnt.keys()
  if (a > b) {
      a, b = b, a
  return (a == 1 && cnt[a] == 1) || (a+1 == b && cnt[b] == 1);
}

export { equalFrequency };
