function minOperations(s: any): boolean | number | string | any {
  """
  :type s: str
  :rtype: int
  """
  cnt = sum(int(c) == i%2 for i, c in enumerate(s))
  return min(cnt, (s).length-cnt);
}

export { minOperations };
