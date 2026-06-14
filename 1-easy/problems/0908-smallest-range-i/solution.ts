function smallestRangeI(A: any, K: any): boolean | number | string | any {
  """
  :type A: List[int]
  :type K: int
  :rtype: int
  """
  return max(0, max(A) - min(A) - 2*K);
}

export { smallestRangeI };
