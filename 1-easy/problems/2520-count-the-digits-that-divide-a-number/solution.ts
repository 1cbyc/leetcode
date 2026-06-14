function countDigits(num: any): boolean | number | string | any {
  """
  :type num: int
  :rtype: int
  """
  result = 0
  curr = num
  while (curr) {
      result += int(num%(curr%10) == 0)
      curr //= 10
  return result;
}

export { countDigits };
