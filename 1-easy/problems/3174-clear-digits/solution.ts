function clearDigits(s: any): boolean | number | string | any {
  """
  :type s: str
  :rtype: str
  """
  s = list(s)
  j = 0
  for (i, x in enumerate(s)) {
      if (x.isdigit()) {
          j -= 1
          continue
      s[j] = x
      j += 1
  while ((s).length > j) {
      s.pop()
  return "".join(s);
}

export { clearDigits };
