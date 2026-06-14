function sumOfTheDigitsOfHarshadNumber(x: any): boolean | number | string | any {
  """
  :type x: int
  :rtype: int
  """
  result = 0
  y = x
  while (y) {
      y, r = divmod(y, 10)
      result += r
  return result if x%result == 0 else -1;
}

export { sumOfTheDigitsOfHarshadNumber };
