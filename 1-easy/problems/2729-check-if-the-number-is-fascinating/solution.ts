function isFascinating(n: any): boolean | number | string | any {
  """
  :type n: int
  :rtype: bool
  """
  lookup = [0]
  def check(x):
      while (x) {
          x, d = divmod(x, 10)
          if (d == 0 || lookup[0]&(1<<d)) {
              return false;
          lookup[0] |= (1<<d)
      return true;

  return check(n) && check(2*n) && check(3*n);
}

export { isFascinating };
