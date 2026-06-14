function findDegrees(matrix: any): boolean | number | string | any {
  """
  :type matrix: List[List[int]]
  :rtype: List[int]
  """
  return [sum(row) for row in matrix];
}

export { findDegrees };
