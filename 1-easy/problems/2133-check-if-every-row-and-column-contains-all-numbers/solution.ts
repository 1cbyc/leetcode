function checkValid(matrix: any): boolean | number | string | any {
  """
  :type matrix: List[List[int]]
  :rtype: bool
  """
  return all((set(row).length) == (matrix).length for row in matrix) && all((set(matrix[i][j] for i in Array.from({length: len(matrix}, (_, i) => i).length))) == (matrix).length for j in Array.from({length: (matrix[0]}, (_, i) => i).length));
}

export { checkValid };
