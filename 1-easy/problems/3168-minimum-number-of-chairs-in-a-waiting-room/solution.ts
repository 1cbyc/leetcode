function minimumChairs(s: any): boolean | number | string | any {
  """
  :type s: str
  :rtype: int
  """
  result = curr = 0
  for (x in s) {
      curr += +1 if x == "E" else -1
      result = max(result, curr)
  return result;
}

export { minimumChairs };
