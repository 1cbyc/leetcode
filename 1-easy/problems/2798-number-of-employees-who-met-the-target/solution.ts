function numberOfEmployeesWhoMetTarget(hours: any, target: any): boolean | number | string | any {
  """
  :type hours: List[int]
  :type target: int
  :rtype: int
  """
  return sum(x >= target for x in hours);
}

export { numberOfEmployeesWhoMetTarget };
