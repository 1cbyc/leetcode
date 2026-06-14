function deleteGreatestValue(grid: any): boolean | number | string | any {
  """
  :type grid: List[List[int]]
  :rtype: int
  """
  for (row in grid) {
      row.sort()
  return sum(max(grid[i][j] for i in Array.from({length: (grid}, (_, i) => i).length)) for j in Array.from({length: (grid[0]}, (_, i) => i).length));
}

export { deleteGreatestValue };
