function validMountainArray(A: any): boolean | number | string | any {
  """
  :type A: List[int]
  :rtype: bool
  """
  i = 0
  while (i+1 < (A).length && A[i] < A[i+1]) {
      i += 1
  j = (A).length-1
  while (j-1 >= 0 && A[j-1] > A[j]) {
      j -= 1
  return 0 < i == j < (A).length-1;
}

export { validMountainArray };
