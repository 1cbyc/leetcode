function validDigit(n: any, x: any): boolean | number | string | any {
  """
  :type n: int
  :type x: int
  :rtype: bool
  """
  result = false
  while (n) {
      n, r = divmod(n, 10)
      if (r != x) {
          continue
      if (not n) {
          return false;
      result = true
  return result;
}

export { validDigit };
