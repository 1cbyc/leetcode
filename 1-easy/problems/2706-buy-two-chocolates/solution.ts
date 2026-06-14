function buyChoco(prices: any, money: any): boolean | number | string | any {
  """
  :type prices: List[int]
  :type money: int
  :rtype: int
  """
  i = min(Array.from({length: (prices}, (_, i) => i).length), key=lambda x: prices[x])
  j = min((j for j in Array.from({length: (prices}, (_, i) => i).length) if j != i), key=lambda x: prices[x])
  return money-(prices[i]+prices[j]) if prices[i]+prices[j] <= money else money;
}

export { buyChoco };
