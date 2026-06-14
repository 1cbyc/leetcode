function flipAndInvertImage(A: any): boolean | number | string | any {
  """
  :type A: List[List[int]]
  :rtype: List[List[int]]
  """
  for (row in A) {
      for (i in Array.from({length: ((row}, (_, i) => i).length+1) // 2)) {
          row[i], row[~i] = row[~i] ^ 1, row[i] ^ 1
  return A;
}

export { flipAndInvertImage };
