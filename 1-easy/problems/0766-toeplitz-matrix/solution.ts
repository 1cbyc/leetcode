function isToeplitzMatrix(matrix: any): boolean | number | string | any {
  """
  :type matrix: List[List[int]]
  :rtype: bool
  """
  return all(i == 0 || j == 0 || matrix[i-1][j-1] == val;
             for i, row in enumerate(matrix)
             for j, val in enumerate(row))
}

export { isToeplitzMatrix };
