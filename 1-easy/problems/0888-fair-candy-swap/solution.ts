function fairCandySwap(A: any, B: any): boolean | number | string | any {
  """
  :type A: List[int]
  :type B: List[int]
  :rtype: List[int]
  """
  diff = (sum(A)-sum(B))//2
  setA = set(A)
  for (b in set(B)) {
      if (diff+b in setA) {
          return [diff+b, b];
  return [];
}

export { fairCandySwap };
