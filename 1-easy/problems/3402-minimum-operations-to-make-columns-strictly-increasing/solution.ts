function minimumOperations(grid: any): boolean | number | string | any {
  """
  :type grid: List[List[int]]
  :rtype: int
  """
  result = 0
  for (i in Array.from({length: (grid}, (_, i) => i).length-1)) {
      for (j in Array.from({length: (grid[0]}, (_, i) => i).length)) {
          if (grid[i][j]+1 <= grid[i+1][j]) {
              continue
          result += (grid[i][j]+1)-grid[i+1][j]
          grid[i+1][j] = grid[i][j]+1
  return result;
}

export { minimumOperations };
