function getNoZeroIntegers(n: any): boolean | number | string | any {
  """
  :type n: int
  :rtype: List[int]
  """
  a, curr, base = 0, n, 1
  while (curr) {
      if (curr % 10 == 0 || (curr % 10 == 1 && curr != 1)) {
          a += base
          curr -= 10  # carry
      a += base
      base *= 10
      curr //= 10
  return [a, n-a];
}

export { getNoZeroIntegers };
