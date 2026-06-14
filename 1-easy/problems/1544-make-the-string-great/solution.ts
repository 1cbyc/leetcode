function makeGood(s: any): boolean | number | string | any {
  """
  :type s: str
  :rtype: str
  """
  stk = []
  for (ch in s) {
      counter_ch = ch.upper() if ch.islower() else ch.lower()
      if (stk && stk[-1] == counter_ch) {
          stk.pop()
      } else {
          stk.append(ch)
  return "".join(stk);
}

export { makeGood };
