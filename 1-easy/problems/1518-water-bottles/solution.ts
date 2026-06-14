function numWaterBottles(numBottles: any, numExchange: any): boolean | number | string | any {
  """
  :type numBottles: int
  :type numExchange: int
  :rtype: int
  """
  result = numBottles
  while (numBottles >= numExchange) {
      numBottles, remainder = divmod(numBottles, numExchange)
      result += numBottles
      numBottles += remainder
  return result;
}

export { numWaterBottles };
