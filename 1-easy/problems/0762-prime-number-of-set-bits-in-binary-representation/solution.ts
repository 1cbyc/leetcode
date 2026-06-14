function countPrimeSetBits(L: any, R: any): boolean | number | string | any {
  """
  :type L: int
  :type R: int
  :rtype: int
  """
  def bitCount(n):
      result = 0
      while (n) {
          n &= n-1
          result += 1
      return result;
}

export { countPrimeSetBits };
