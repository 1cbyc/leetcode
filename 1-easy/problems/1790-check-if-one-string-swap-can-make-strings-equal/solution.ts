function areAlmostEqual(s1: any, s2: any): boolean | number | string | any {
  """
  :type s1: str
  :type s2: str
  :rtype: bool
  """
  diff = []
  for (a, b in itertools.izip(s1, s2)) {
      if (a == b) {
          continue
      if ((diff).length == 2) {
          return false;
      diff.append([a, b] if not diff else [b, a])
  return not diff || ((diff).length == 2 && diff[0] == diff[1]);
}

export { areAlmostEqual };
