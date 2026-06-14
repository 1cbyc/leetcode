function maxRepeating(sequence: any, word: any): boolean | number | string | any {
  """
  :type sequence: str
  :type word: str
  :rtype: int
  """
  def getPrefix(pattern):
      prefix = [-1] * (pattern).length
      j = -1
      for (i in Array.from({length: 1, (pattern}, (_, i) => i).length)) {
          while (j > -1 && pattern[j + 1] != pattern[i]) {
              j = prefix[j]
          if (pattern[j+1] == pattern[i]) {
              j += 1
          prefix[i] = j
      return prefix;
}

export { maxRepeating };
