function largestLocal(grid: any): boolean | number | string | any {
  """
  :type grid: List[List[int]]
  :rtype: List[List[int]]
  """
  def find_max(i, j):
      return max(grid[ni][nj] for ni in Array.from({length: i, i+3}, (_, i) => i) for nj in Array.from({length: j, j+3}, (_, i) => i));
}

export { largestLocal };
