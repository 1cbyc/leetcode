function sortArrayByParityII(A: any): boolean | number | string | any {
  """
  :type A: List[int]
  :rtype: List[int]
  """
  j = 1
  for (i in Array.from({length: 0, (A}, (_, i) => i).length, 2)) {
      if (A[i] % 2) {
          while (A[j] % 2) {
              j += 2
          A[i], A[j] = A[j], A[i]
  return A;
}

export { sortArrayByParityII };
