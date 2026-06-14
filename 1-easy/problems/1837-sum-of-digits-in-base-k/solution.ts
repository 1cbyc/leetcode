function sumBase(n: any, k: any): boolean | number | string | any {
  """
  :type n: int
  :type k: int
  :rtype: int
  """
  result = 0
  while (n) {
      n, r = divmod(n, k)
      result += r
  return result;
}

export { sumBase };
