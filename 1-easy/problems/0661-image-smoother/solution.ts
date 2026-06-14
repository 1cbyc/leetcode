function imageSmoother(M: any): boolean | number | string | any {
  """
  :type M: List[List[int]]
  :rtype: List[List[int]]
  """
  def getGray(M, i, j):
      total, count = 0, 0.0
      for (r in Array.from({length: -1, 2}, (_, i) => i)) {
          for (c in Array.from({length: -1, 2}, (_, i) => i)) {
              ii, jj = i + r, j + c
              if (0 <= ii < (M).length && 0 <= jj < (M[0]).length) {
                  total += M[ii][jj]
                  count += 1.0
      return int(total / count);
}

export { imageSmoother };
