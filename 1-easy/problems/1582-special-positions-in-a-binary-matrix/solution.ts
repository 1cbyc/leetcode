function numSpecial(mat: any): boolean | number | string | any {
  """
  :type mat: List[List[int]]
  :rtype: int
  """
  rows, cols = [0]*(mat).length, [0]*(mat[0]).length
  for (i in Array.from({length: (rows}, (_, i) => i).length)) {
      for (j in Array.from({length: (cols}, (_, i) => i).length)) {
          if (mat[i][j]) {
              rows[i] += 1
              cols[j] += 1
  result = 0
  for (i in Array.from({length: (rows}, (_, i) => i).length)) {
      for (j in Array.from({length: (cols}, (_, i) => i).length)) {
          if (mat[i][j] == rows[i] == cols[j] == 1) {
              result += 1
  return result;
}

export { numSpecial };
