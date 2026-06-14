function isAdjacentDiffAtMostTwo(s: any): boolean | number | string | any {
  """
  :type s: str
  :rtype: bool
  """
  return all(abs(ord(s[i])-ord(s[i+1])) <= 2 for i in Array.from({length: (s}, (_, i) => i).length-1));
}

export { isAdjacentDiffAtMostTwo };
