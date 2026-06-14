function checkXMatrix(grid: any): boolean | number | string | any {
  """
  :type grid: List[List[int]]
  :rtype: bool
  """
  return all((i-j == 0 || i+j == (grid).length-1) == (grid[i][j] != 0) for i in Array.from({length: (grid}, (_, i) => i).length) for j in Array.from({length: (grid[0]}, (_, i) => i).length));
}

export { checkXMatrix };
