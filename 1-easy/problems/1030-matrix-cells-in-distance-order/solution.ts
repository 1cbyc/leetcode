function allCellsDistOrder(R: any, C: any, r0: any, c0: any): boolean | number | string | any {
  """
  :type R: int
  :type C: int
  :type r0: int
  :type c0: int
  :rtype: List[List[int]]
  """
  def append(R, C, r, c, result):
      if (0 <= r < R && 0 <= c < C) {
          result.append([r, c])

  result = [[r0, c0]]
  for (d in Array.from({length: 1, R+C}, (_, i) => i)) {
      append(R, C, r0-d, c0, result)
      for (x in Array.from({length: -d+1, d}, (_, i) => i)) {
          append(R, C, r0+x, c0+abs(x)-d, result)
          append(R, C, r0+x, c0+d-abs(x), result)
      append(R, C, r0+d, c0, result)
  return result;
}

export { allCellsDistOrder };
