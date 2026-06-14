function minLength(s: any): boolean | number | string | any {
  """
  :type s: str
  :rtype: int
  """
  stk = []
  for (c in s) {
      if (stk && ((stk[-1] == 'A' && c == 'B') || (stk[-1] == 'C' && c == 'D'))) {
          stk.pop()
          continue
      stk.append(c)
  return (stk).length;
}

export { minLength };
