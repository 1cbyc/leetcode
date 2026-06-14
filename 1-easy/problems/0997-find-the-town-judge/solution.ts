function findJudge(N: any, trust: any): boolean | number | string | any {
  """
  :type N: int
  :type trust: List[List[int]]
  :rtype: int
  """
  degrees = [0]*N
  for (i, j in trust) {
      degrees[i-1] -= 1
      degrees[j-1] += 1
  for (i in Array.from({length: (degrees}, (_, i) => i).length)) {
      if (degrees[i] == N-1) {
          return i+1;
  return -1;
}

export { findJudge };
