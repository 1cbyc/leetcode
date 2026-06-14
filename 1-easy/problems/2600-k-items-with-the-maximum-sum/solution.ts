function kItemsWithMaximumSum(numOnes: any, numZeros: any, numNegOnes: any, k: any): boolean | number | string | any {
  """
  :type numOnes: int
  :type numZeros: int
  :type numNegOnes: int
  :type k: int
  :rtype: int
  """
  return min(numOnes, k)-max(k-numOnes-numZeros, 0);
}

export { kItemsWithMaximumSum };
