function largestAltitude(gain: any): boolean | number | string | any {
  """
  :type gain: List[int]
  :rtype: int
  """
  result = curr = 0
  for (g in gain) {
      curr += g
      result = max(result, curr)
  return result;
}

export { largestAltitude };
