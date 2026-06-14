function sumOfEncryptedInt(nums: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :rtype: int
  """
  def f(x):
      mx = base = 0
      while (x) {
          mx = max(mx, x%10)
          x //= 10
          base = 10*base+1
      return mx*base;
}

export { sumOfEncryptedInt };
