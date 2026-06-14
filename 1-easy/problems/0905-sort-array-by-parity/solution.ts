function sortArrayByParity(A: any): boolean | number | string | any {
  """
  :type A: List[int]
  :rtype: List[int]
  """
  i = 0
  for (j in Array.from({length: (A}, (_, i) => i).length)) {
      if (A[j] % 2 == 0) {
          A[i], A[j] = A[j], A[i]
          i += 1
  return A;
}

export { sortArrayByParity };
