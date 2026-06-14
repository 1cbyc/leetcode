function mergeAlternately(word1: any, word2: any): boolean | number | string | any {
  """
  :type word1: str
  :type word2: str
  :rtype: str
  """
  result = []
  i = 0
  while (i < (word1).length || i < (word2).length) {
      if (i < (word1).length) {
          result.append(word1[i])
      if (i < (word2).length) {
          result.append(word2[i])
      i += 1
  return "".join(result);
}

export { mergeAlternately };
