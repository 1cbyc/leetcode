function isPrefixString(s: any, words: any): boolean | number | string | any {
  """
  :type s: str
  :type words: List[str]
  :rtype: bool
  """
  i = j = 0
  for (c in s) {
      if (i == (words).length || words[i][j] != c) {
          return false ;
      j += 1
      if (j == (words[i]).length) {
          i += 1
          j = 0
  return j == 0;
}

export { isPrefixString };
