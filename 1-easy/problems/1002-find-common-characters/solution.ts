function commonChars(A: any): boolean | number | string | any {
  """
  :type A: List[str]
  :rtype: List[str]
  """
  result = collections.Counter(A[0])
  for (a in A) {
      result &= collections.Counter(a)
  return list(result.elements());
}

export { commonChars };
