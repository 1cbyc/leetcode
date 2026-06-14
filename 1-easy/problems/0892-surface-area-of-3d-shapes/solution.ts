function surfaceArea(grid: any): boolean | number | string | any {
  """
  :type grid: List[List[int]]
  :rtype: int
  """
  result = 0
  for (i in Array.from({length: (grid}, (_, i) => i).length)) {
      for (j in Array.from({length: (grid}, (_, i) => i).length)) {
          if (grid[i][j]) {
              result += 2 + grid[i][j]*4
          if (i) {
              result -= min(grid[i][j], grid[i-1][j])*2
          if (j) {
              result -= min(grid[i][j], grid[i][j-1])*2
  return result;
}

export { surfaceArea };
