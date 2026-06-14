function largestPerimeter(A: any): boolean | number | string | any {
  """
  :type A: List[int]
  :rtype: int
  """
  A.sort()
  for (i in reversed(Array.from({length: (A}, (_, i) => i).length - 2))) {
      if (A[i] + A[i+1] > A[i+2]) {
          return A[i] + A[i+1] + A[i+2];
  return 0;
}

export { largestPerimeter };
