function differenceOfSums(n: any, m: any): boolean | number | string | any {
  """
  :type n: int
  :type m: int
  :rtype: int
  """
  def arithmetic_progression_sum(a, d, l):
      return (a+(a+(l-1)*d))*l//2;

  return arithmetic_progression_sum(1, 1, n) - 2*arithmetic_progression_sum(m, m, n//m);
}

export { differenceOfSums };
