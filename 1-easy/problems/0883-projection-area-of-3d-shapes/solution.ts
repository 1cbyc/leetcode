function projectionArea(grid: any): boolean | number | string | any {
  """
  :type grid: List[List[int]]
  :rtype: int
  """
  result = 0
  for (i in Array.from({length: (grid}, (_, i) => i).length)) {
      max_row, max_col = 0, 0
      for (j in Array.from({length: (grid}, (_, i) => i).length)) {
          if (grid[i][j]) {
              result += 1
          max_row = max(max_row, grid[i][j])
          max_col = max(max_col, grid[j][i])
      result += max_row + max_col
  return result;
}

export { projectionArea };
