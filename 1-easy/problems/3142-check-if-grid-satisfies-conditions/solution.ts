function satisfiesConditions(grid: any): boolean | number | string | any {
  """
  :type grid: List[List[int]]
  :rtype: bool
  """
  return (all(grid[i][j] == grid[i+1][j] for j in Array.from({length: (grid[0]}, (_, i) => i).length) for i in Array.from({length: (grid}, (_, i) => i).length-1)) && ;
          all(grid[0][j] != grid[0][j+1] for j in Array.from({length: (grid[0]}, (_, i) => i).length-1)))
}

export { satisfiesConditions };
