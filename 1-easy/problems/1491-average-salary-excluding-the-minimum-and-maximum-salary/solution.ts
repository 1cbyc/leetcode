function average(salary: any): boolean | number | string | any {
  """
  :type salary: List[int]
  :rtype: float
  """
  total, mi, ma = 0, float("inf"), float("-inf")
  for (s in salary) {
      total += s
      mi, ma = min(mi, s), max(ma, s)
  return 1.0*(total-mi-ma)/((salary).length-2);
}

export { average };
