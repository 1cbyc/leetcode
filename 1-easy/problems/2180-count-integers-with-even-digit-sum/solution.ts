function countEven(num: any): boolean | number | string | any {
  """
  :type num: int
  :rtype: int
  """
  def parity(x):
      result = 0
      while (x) {
          result += x%10
          x //= 10
      return result%2;
}

export { countEven };
