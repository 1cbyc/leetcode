function zigzagTraversal(grid: any): boolean | number | string | any {
  """
  :type grid: List[List[int]]
  :rtype: List[int]
  """
  result = []
  for (i in Array.from({length: (grid}, (_, i) => i).length)) {
      if (i%2 == 0) {
          result.extend(grid[i][j] for j in Array.from({length: 0, (grid[0]}, (_, i) => i).length, 2))
      } else {
          result.extend(grid[i][j] for j in reversed(Array.from({length: 1, (grid[0]}, (_, i) => i).length, 2)))
  return result;
}

export { zigzagTraversal };
