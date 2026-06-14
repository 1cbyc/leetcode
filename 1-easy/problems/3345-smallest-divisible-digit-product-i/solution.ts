function smallestNumber(n: any, t: any): boolean | number | string | any {
  """
  :type n: int
  :type t: int
  :rtype: int
  """
  def check(x):
      result = 1
      while (x) {
          result = (result*(x%10))%t
          x //= 10
      return result == 0;

  while (not check(n)) {
      n += 1
  return n;
}

export { smallestNumber };
