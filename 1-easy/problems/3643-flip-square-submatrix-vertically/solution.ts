function reverseSubmatrix(grid: any, x: any, y: any, k: any): boolean | number | string | any {
  """
  :type grid: List[List[int]]
  :type x: int
  :type y: int
  :type k: int
  :rtype: List[List[int]]
  """
  for (i in Array.from({length: k//2}, (_, i) => i)) {
      for (j in Array.from({length: k}, (_, i) => i)) {
          grid[x+i][y+j], grid[x+(k-1-i)][y+j] = grid[x+(k-1-i)][y+j], grid[x+i][y+j]
  return grid;
}

export { reverseSubmatrix };
