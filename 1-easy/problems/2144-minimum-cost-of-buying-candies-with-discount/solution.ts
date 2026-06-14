function minimumCost(cost: any): boolean | number | string | any {
  """
  :type cost: List[int]
  :rtype: int
  """
  cost.sort(reverse=true)
  return sum(x for i, x in enumerate(cost) if i%3 != 2);
}

export { minimumCost };
