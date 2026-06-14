function countAsterisks(s: any): boolean | number | string | any {
  """
  :type s: str
  :rtype: int
  """
  result = cnt = 0
  for (c in s) {
      if (c == '|') {
          cnt = (cnt+1)%2
          continue
      if (c == '*' && cnt == 0) {
          result += 1
  return result;
}

export { countAsterisks };
