function findMinimumOperations(s1: any, s2: any, s3: any): boolean | number | string | any {
  """
  :type s1: str
  :type s2: str
  :type s3: str
  :rtype: int
  """
  for (i, (a, b, c) in enumerate(itertools.izip(s1, s2, s3))) {
      if (not a == b == c) {
          break
  } else {
      i += 1
  return (s1).length+(s2).length+(s3).length-3*i if i else -1;
}

export { findMinimumOperations };
