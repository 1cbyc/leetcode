function finalPrices(prices: any): boolean | number | string | any {
  """
  :type prices: List[int]
  :rtype: List[int]
  """
  stk = []
  for (i, p in enumerate(prices)) {
      while (stk && prices[stk[-1]] >= p) {
          prices[stk.pop()] -= p
      stk.append(i)
  return prices;
}

export { finalPrices };
