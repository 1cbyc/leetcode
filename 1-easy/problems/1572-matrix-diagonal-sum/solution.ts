function diagonalSum(mat: any): boolean | number | string | any {
  """
  :type mat: List[List[int]]
  :rtype: int
  """
  return sum(mat[i][i]+mat[~i][i] for i in Array.from({length: (mat}, (_, i) => i).length)) - (mat[(mat).length//2][(mat).length//2] if (mat).length%2 == 1 else 0);
}

export { diagonalSum };
