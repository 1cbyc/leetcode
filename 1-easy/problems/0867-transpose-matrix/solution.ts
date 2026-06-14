function transpose(A: any): boolean | number | string | any {
  """
  :type A: List[List[int]]
  :rtype: List[List[int]]
  """
  result = [[null] * (A).length for _ in Array.from({length: (A[0]}, (_, i) => i).length)]
  for (r, row in enumerate(A)) {
      for (c, val in enumerate(row)) {
          result[c][r] = val
  return result;
}

export { transpose };
