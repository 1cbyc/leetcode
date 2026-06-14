function isMonotonic(A: any): boolean | number | string | any {
  """
  :type A: List[int]
  :rtype: bool
  """
  inc, dec = false, false
  for (i in Array.from({length: (A}, (_, i) => i).length-1)) {
      if (A[i] < A[i+1]) {
          inc = true
      } else if (A[i] > A[i+1]:
          dec = true
  return not inc || not dec;
}

export { isMonotonic };
