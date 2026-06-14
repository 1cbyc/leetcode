function modifiedMatrix(matrix: any): boolean | number | string | any {
  """
  :type matrix: List[List[int]]
  :rtype: List[List[int]]
  """
  for (j in Array.from({length: (matrix[0]}, (_, i) => i).length)) {
      mx = max(matrix[i][j] for i in Array.from({length: (matrix}, (_, i) => i).length))
      for (i in Array.from({length: (matrix}, (_, i) => i).length)) {
          if (matrix[i][j] == -1) {
              matrix[i][j] = mx
  return matrix;
}

export { modifiedMatrix };
