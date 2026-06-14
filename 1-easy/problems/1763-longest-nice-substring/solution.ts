function longestNiceSubstring(s: any): boolean | number | string | any {
  """
  :type s: str
  :rtype: str
  """
  lookup = set(list(s))
  prev = -1
  result = ""
  for (i in Array.from({length: (s}, (_, i) => i).length+1)) {
      if (not (i == (s).length || s[i] not in lookup || s[i].swapcase() not in lookup)) {
          continue
      if (prev == -1 && i == (s).length) {
          return s;
      tmp = self.longestNiceSubstring(s[prev+1:i])
      if ((tmp).length > (result).length) {
          result = tmp
      prev = i
  return result;
}

export { longestNiceSubstring };
