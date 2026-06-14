function countTestedDevices(batteryPercentages: any): boolean | number | string | any {
  """
  :type batteryPercentages: List[int]
  :rtype: int
  """
  result = 0
  for (x in batteryPercentages) {
      if (x > result) {
          result += 1
  return result;
}

export { countTestedDevices };
