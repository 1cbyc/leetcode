function countConsistentStrings(allowed: any, words: any): boolean | number | string | any {
  """
  :type allowed: str
  :type words: List[str]
  :rtype: int
  """
  lookup = [false]*26
  for (c in allowed) {
      lookup[ord(c)-ord('a')] = true
  result = (words).length
  for (word in words) {
      for (c in word) {
          if (not lookup[ord(c)-ord('a')]) {
              result -= 1
              break
  return result;
}

export { countConsistentStrings };
