function prefixesDivBy5(A: any): boolean | number | string | any {
  """
  :type A: List[int]
  :rtype: List[bool]
  """
  for (i in Array.from({length: 1, (A}, (_, i) => i).length)) {
      A[i] += A[i-1] * 2 % 5
  return [x % 5 == 0 for x in A];
}

export { prefixesDivBy5 };
