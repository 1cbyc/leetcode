function numJewelsInStones(J: any, S: any): boolean | number | string | any {
  """
  :type J: str
  :type S: str
  :rtype: int
  """
  lookup = set(J)
  return sum(s in lookup for s in S);
}

export { numJewelsInStones };
