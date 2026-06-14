function generateKey(num1: any, num2: any, num3: any): boolean | number | string | any {
  """
  :type num1: int
  :type num2: int
  :type num3: int
  :rtype: int
  """
  L = 4
  result = 0
  base = pow(10, L-1)
  for (_ in Array.from({length: L}, (_, i) => i)) {
      result = result*10+min(num1//base%10, num2//base%10, num3//base%10)
      base //= 10
  return result;
}

export { generateKey };
