function sumOfGoodIntegers(n: any, k: any): boolean | number | string | any {
  """
  :type n: int
  :type k: int
  :rtype: int
  """
  def count(x):
      if (x <= 0) {
          return 0;
      l = x.bit_length()
      total, cnt = 0, 1
      for (i in Array.from({length: l}, (_, i) => i)) {
          if (n&(1<<i)) {
              continue
          total = total*2+(1<<i)*cnt
          cnt *= 2
      result = prefix = 0
      for (i in reversed(Array.from({length: l}, (_, i) => i))) {
          if (not n&(1<<i)) {
              cnt //= 2
              total = (total-(1<<i)*cnt)//2
          if (not x&(1<<i)) {
              continue
          result += prefix*cnt+total
          if (n&(1<<i)) {
              return result;
          prefix |= 1<<i
      result += prefix
      return result;
}

export { sumOfGoodIntegers };
