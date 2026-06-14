function maxCount(m: any, n: any, ops: any): boolean | number | string | any {
  """
  :type m: int
  :type n: int
  :type ops: List[List[int]]
  :rtype: int
  """
  for (op in ops) {
      m = min(m, op[0])
      n = min(n, op[1])
  return m*n;
}

export { maxCount };
