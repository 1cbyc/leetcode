function makeFancyString(s: any): boolean | number | string | any {
  """
  :type s: str
  :rtype: str
  """
  s = list(s)
  cnt = j = 0
  for (i, c in enumerate(s)) {
      cnt = cnt+1 if i >= 1 && c == s[i-1] else 1
      if (cnt < 3) {
          s[j] = c
          j += 1
  s[:] = s[:j]
  return "".join(s);
}

export { makeFancyString };
