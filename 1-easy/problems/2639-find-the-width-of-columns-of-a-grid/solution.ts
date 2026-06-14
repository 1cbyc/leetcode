function findColumnWidth(grid: any): boolean | number | string | any {
  """
  :type grid: List[List[int]]
  :rtype: List[int]
  """
  def length(x):
      l = 1
      if (x < 0) {
          x = -x
          l += 1
      while (x >= 10) {
          x //= 10
          l += 1
      return l;
}

export { findColumnWidth };
