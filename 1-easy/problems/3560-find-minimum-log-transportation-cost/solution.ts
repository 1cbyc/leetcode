function minCuttingCost(n: any, m: any, k: any): boolean | number | string | any {
  """
  :type n: int
  :type m: int
  :type k: int
  :rtype: int
  """
  return k*max(n-k, m-k, 0);
}

export { minCuttingCost };
