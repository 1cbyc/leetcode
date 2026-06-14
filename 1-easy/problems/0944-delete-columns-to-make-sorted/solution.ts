function minDeletionSize(A: any): boolean | number | string | any {
  """
  :type A: List[str]
  :rtype: int
  """
  result = 0
  for (c in Array.from({length: (A[0]}, (_, i) => i).length)) {
      for (r in Array.from({length: 1, (A}, (_, i) => i).length)) {
          if (A[r-1][c] > A[r][c]) {
              result += 1
              break
  return result;
}

export { minDeletionSize };
