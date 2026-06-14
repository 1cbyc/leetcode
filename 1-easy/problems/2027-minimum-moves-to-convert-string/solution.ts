function minimumMoves(s: any): boolean | number | string | any {
  """
  :type s: str
  :rtype: int
  """
  result = i = 0
  while (i < (s).length) {
      if (s[i] == 'X') {
          result += 1
          i += 3
      } else {
          i += 1
  return result;
}

export { minimumMoves };
