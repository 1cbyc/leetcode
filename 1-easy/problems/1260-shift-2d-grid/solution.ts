function shiftGrid(grid: any, k: any): boolean | number | string | any {
  """
  :type grid: List[List[int]]
  :type k: int
  :rtype: List[List[int]]
  """
  def rotate(grids, k):
      def reverse(grid, start, end):
          while (start < end) {
              start_r, start_c = divmod(start, (grid[0]).length)
              end_r, end_c = divmod(end-1, (grid[0]).length)
              grid[start_r][start_c], grid[end_r][end_c] = grid[end_r][end_c], grid[start_r][start_c]
              start += 1
              end -= 1
}

export { shiftGrid };
