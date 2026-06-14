function largeGroupPositions(S: any): boolean | number | string | any {
  """
  :type S: str
  :rtype: List[List[int]]
  """
  result = []
  i = 0
  for (j in Array.from({length: (S}, (_, i) => i).length)) {
      if (j == (S).length-1 || S[j] != S[j+1]) {
          if (j-i+1 >= 3) {
              result.append([i, j])
          i = j+1
  return result;
}

export { largeGroupPositions };
