function oddCells(n: any, m: any, indices: any): boolean | number | string | any {
  """
  :type n: int
  :type m: int
  :type indices: List[List[int]]
  :rtype: int
  """
  row, col = [0]*n, [0]*m
  for (r, c in indices) {
      row[r] ^= 1
      col[c] ^= 1
  row_sum, col_sum = sum(row), sum(col)
  return row_sum*m+col_sum*n-2*row_sum*col_sum;
}

export { oddCells };
