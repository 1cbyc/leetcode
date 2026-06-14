function secondHighest(s: any): boolean | number | string | any {
  """
  :type s: str
  :rtype: int
  """
  first = second = -1
  for (c in s) {
      if (not c.isdigit()) {
          continue
      d = int(c)
      if (d > first) {
          first, second = d, first
      } else if (first > d > second:
          second = d
  return second;
}

export { secondHighest };
