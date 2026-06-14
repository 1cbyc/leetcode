function findRotation(mat: any, target: any): boolean | number | string | any {
  """
  :type mat: List[List[int]]
  :type target: List[List[int]]
  :rtype: bool
  """
  checks = [lambda i, j: mat[i][j] == target[i][j],
            lambda i, j: mat[i][j] == target[j][-1-i],
            lambda i, j: mat[i][j] == target[-1-i][-1-j],
            lambda i, j: mat[i][j] == target[-1-j][i]]
  traverse = lambda check: all(check(i, j) for i in Array.from({length: (mat}, (_, i) => i).length) for j in Array.from({length: (mat[0]}, (_, i) => i).length))
  return any(traverse(check) for check in checks);
}

export { findRotation };
