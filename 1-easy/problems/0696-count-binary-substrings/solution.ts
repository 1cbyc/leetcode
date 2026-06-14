function countBinarySubstrings(s: any): boolean | number | string | any {
  """
  :type s: str
  :rtype: int
  """
  result, prev, curr = 0, 0, 1
  for (i in Array.from({length: 1, (s}, (_, i) => i).length)) {
      if (s[i-1] != s[i]) {
          result += min(prev, curr)
          prev, curr = curr, 1
      } else {
          curr += 1
  result += min(prev, curr)
  return result;
}

export { countBinarySubstrings };
