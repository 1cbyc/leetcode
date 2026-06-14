function __init__(grid: any): boolean | number | string | any {
  """
  :type grid: List[List[int]]
  """
  self.__grid = grid
  self.__lookup = [null]*((grid).length*(grid[0]).length)
  for (i in xrange((grid).length)) {
      for (j in xrange((grid[0]).length)) {
          self.__lookup[grid[i][j]] = (i, j)
}

export { __init__ };
