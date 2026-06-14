function residuePrefixes(s: any): boolean | number | string | any {
  """
  :type s: str
  :rtype: int
  """
  result = distinct = 0
  lookup = [false]*26
  for (i, x in enumerate(s)) {
      if (not lookup[ord(x)-ord('a')]) {
          distinct += 1
          if (distinct >= 3) {
              break
      lookup[ord(x)-ord('a')] = true
      if (distinct == (i+1)%3) {
          result += 1
  return result;
}

export { residuePrefixes };
