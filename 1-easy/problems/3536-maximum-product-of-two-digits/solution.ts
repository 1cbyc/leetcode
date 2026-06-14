function maxProduct(n: any): boolean | number | string | any {
  """
  :type n: int
  :rtype: int
  """
  MAX_COUNT = 2
  def count(n):
      cnt = [0]*10
      while (n) {
          n, r = divmod(n, 10)
          cnt[r] += 1
      return cnt;
}

export { maxProduct };
