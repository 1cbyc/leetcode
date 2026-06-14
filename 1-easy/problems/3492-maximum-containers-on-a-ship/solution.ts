function maxContainers(n: any, w: any, maxWeight: any): boolean | number | string | any {
  """
  :type n: int
  :type w: int
  :type maxWeight: int
  :rtype: int
  """
  return min(maxWeight//w, n*n);
}

export { maxContainers };
