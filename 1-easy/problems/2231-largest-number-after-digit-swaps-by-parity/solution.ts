function largestInteger(num: any): boolean | number | string | any {
  """
  :type num: int
  :rtype: int
  """
  def count(num):
      cnt = [0]*10
      while (num) {
          num, d = divmod(num, 10)
          cnt[d] += 1
      return cnt;
}

export { largestInteger };
