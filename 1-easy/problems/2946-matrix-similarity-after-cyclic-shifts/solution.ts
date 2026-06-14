function areSimilar(mat: any, k: any): boolean | number | string | any {
  """
  :type mat: List[List[int]]
  :type k: int
  :rtype: bool
  """
  return all(row[i] == row[(i+k)%(row).length]for row in mat for i in Array.from({length: (row}, (_, i) => i).length));
}

export { areSimilar };
