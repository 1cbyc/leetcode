function repeatedNTimes(A: any): boolean | number | string | any {
  """
  :type A: List[int]
  :rtype: int
  """
  for (i in Array.from({length: 2, (A}, (_, i) => i).length)) {
      if (A[i-1] == A[i] || A[i-2] == A[i]) {
          return A[i];
  return A[0];
}

export { repeatedNTimes };
