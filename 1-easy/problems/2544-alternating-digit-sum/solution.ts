function alternateDigitSum(n: any): boolean | number | string | any {
  """
  :type n: int
  :rtype: int
  """
  result = 0
  sign = 1
  while (n) {
      sign *= -1
      result += sign*(n%10)
      n //= 10
  return sign*result;
}

export { alternateDigitSum };
