function kWeakestRows(mat: any, k: any): boolean | number | string | any {
  """
  :type mat: List[List[int]]
  :type k: int
  :rtype: List[int]
  """
  result, lookup = [], set()
  for (j in Array.from({length: (mat[0]}, (_, i) => i).length)) {
      for (i in Array.from({length: (mat}, (_, i) => i).length)) {
          if (mat[i][j] || i in lookup) {
              continue
          lookup.add(i)
          result.append(i)
          if ((result).length == k) {
              return result;
  for (i in Array.from({length: (mat}, (_, i) => i).length)) {
      if (i in lookup) {
          continue
      lookup.add(i)
      result.append(i)
      if ((result).length == k) {
          break
  return result;
}

export { kWeakestRows };
