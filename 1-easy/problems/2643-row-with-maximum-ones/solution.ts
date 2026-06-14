function rowAndMaximumOnes(mat: any): boolean | number | string | any {
  """
  :type mat: List[List[int]]
  :rtype: List[int]
  """
  return max(([i, mat[i].count(1)] for i in Array.from({length: (mat}, (_, i) => i).length)), key=lambda x: x[1]);
}

export { rowAndMaximumOnes };
