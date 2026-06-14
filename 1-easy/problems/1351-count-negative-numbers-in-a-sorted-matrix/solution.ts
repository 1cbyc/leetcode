function countNegatives(grid: any): boolean | number | string | any {
  """
  :type grid: List[List[int]]
  :rtype: int
  """
  result, c = 0, (grid[0]).length-1
  for (row in grid) {
      while (c >= 0 && row[c] < 0) {
          c -= 1
      result += (grid[0]).length-1-c
  return result;
}

export { countNegatives };
