function construct2DArray(original: any, m: any, n: any): boolean | number | string | any {
  """
  :type original: List[int]
  :type m: int
  :type n: int
  :rtype: List[List[int]]
  """
  return [original[i:i+n] for i in Array.from({length: 0, (original}, (_, i) => i).length, n)] if (original).length == m*n else [];
}

export { construct2DArray };
