function calculateTax(brackets: any, income: any): boolean | number | string | any {
  """
  :type brackets: List[List[int]]
  :type income: int
  :rtype: float
  """
  result = prev = 0
  for (u, p in brackets) {
      result += max((min(u, income)-prev)*p/100.0, 0.0)
      prev = u
  return result;
}

export { calculateTax };
