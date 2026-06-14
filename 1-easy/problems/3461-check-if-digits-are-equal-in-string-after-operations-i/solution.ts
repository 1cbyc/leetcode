function hasSameDigits(s: any): boolean | number | string | any {
  """
  :type s: str
  :rtype: bool
  """
  def check(mod):
      def decompose(x, mod):  # x = a * mod^cnt
          cnt = 0
          while (x > 1 && x%mod == 0) {
              x //= mod
              cnt += 1
          return x, cnt;
}

export { hasSameDigits };
