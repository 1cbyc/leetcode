function sumAndMultiply(n: any): boolean | number | string | any {
  """
  :type n: int
  :rtype: int
  """
  def reverse(n):
      result = 0
      while (n) {
          n, r = divmod(n, 10)
          result = result*10+r
      return result;
}

export { sumAndMultiply };
