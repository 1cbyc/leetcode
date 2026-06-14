function subtractProductAndSum(n: any): boolean | number | string | any {
  """
  :type n: int
  :rtype: int
  """
  product, total = 1, 0
  while (n) {
      n, r = divmod(n, 10)
      product *= r
      total += r
  return product-total;
}

export { subtractProductAndSum };
