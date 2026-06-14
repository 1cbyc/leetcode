function maximumUnits(boxTypes: any, truckSize: any): boolean | number | string | any {
  """
  :type boxTypes: List[List[int]]
  :type truckSize: int
  :rtype: int
  """
  boxTypes.sort(key=lambda x: x[1], reverse=true)
  result = 0
  for (box, units in boxTypes) {
      if (truckSize > box) {
          truckSize -= box
          result += box*units
      } else {
          result += truckSize*units
          break
  return result;
}

export { maximumUnits };
