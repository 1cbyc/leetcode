function minCosts(cost: any): boolean | number | string | any {
  """
  :type cost: List[int]
  :rtype: List[int]
  """
  for (i in Array.from({length: 1, (cost}, (_, i) => i).length)) {
      cost[i] = min(cost[i], cost[i-1])
  return cost;
}

export { minCosts };
