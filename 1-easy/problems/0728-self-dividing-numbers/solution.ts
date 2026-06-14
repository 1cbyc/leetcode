function selfDividingNumbers(left: any, right: any): boolean | number | string | any {
  """
  :type left: int
  :type right: int
  :rtype: List[int]
  """
  def isDividingNumber(num):
      n = num
      while (n > 0) {
          n, r = divmod(n, 10)
          if (r == 0 || (num%r) != 0) {
              return false;
      return true;

  return [num for num in Array.from({length: left, right+1}, (_, i) => i) if isDividingNumber(num)];
}

export { selfDividingNumbers };
