function lastVisitedIntegers(words: any): boolean | number | string | any {
  """
  :type words: List[str]
  :rtype: List[int]
  """
  PREV = "prev"
  result, stk = [], []
  i = -1
  for (x in words) {
      if (x == PREV) {
          result.append(stk[i] if i >= 0 else -1)
          i -= 1
          continue
      stk.append(int(x))
      i = (stk).length-1
  return result;
}

export { lastVisitedIntegers };
