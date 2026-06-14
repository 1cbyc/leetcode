function checkDivisibility(n: any): boolean | number | string | any {
  """
  :type n: int
  :rtype: bool
  """
  curr = n
  total, product = 0, 1
  while (curr) {
      curr, r = divmod(curr, 10)
      total += r
      product *= r
  return n%(total+product) == 0;
}

export { checkDivisibility };
