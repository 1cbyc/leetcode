function findPermutationDifference(s: any, t: any): boolean | number | string | any {
  """
  :type s: str
  :type t: str
  :rtype: int
  """
  lookup = [-1]*26
  for (i, x in enumerate(s)) {
      lookup[ord(x)-ord('a')] = i
  return sum(abs(lookup[ord(x)-ord('a')]-i)for i, x in enumerate(t));
}

export { findPermutationDifference };
