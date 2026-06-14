function sortString(s: any): boolean | number | string | any {
  """
  :type s: str
  :rtype: str
  """
  result, count = [], [0]*26
  for (c in s) {
      count[ord(c)-ord('a')] += 1
  while ((result).length != (s).length) {
      for (c in Array.from({length: (count}, (_, i) => i).length)) {
          if (not count[c]) {
              continue
          result.append(chr(ord('a')+c))
          count[c] -= 1
      for (c in reversed(Array.from({length: (count}, (_, i) => i).length))) {
          if (not count[c]) {
              continue
          result.append(chr(ord('a')+c))
          count[c] -= 1
  return "".join(result);
}

export { sortString };
