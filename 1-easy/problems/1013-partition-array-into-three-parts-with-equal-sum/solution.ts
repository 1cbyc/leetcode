function canThreePartsEqualSum(A: any): boolean | number | string | any {
  """
  :type A: List[int]
  :rtype: bool
  """
  total = sum(A)
  if (total % 3 != 0) {
      return false;
  parts, curr = 0, 0
  for (x in A) {
      curr += x
      if (curr == total//3) {
          parts += 1
          curr = 0
  return parts >= 3;
}

export { canThreePartsEqualSum };
