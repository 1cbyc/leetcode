function isPrefixOfWord(sentence: any, searchWord: any): boolean | number | string | any {
  """
  :type sentence: str
  :type searchWord: str
  :rtype: int
  """
  def KMP(text, pattern):
      def getPrefix(pattern):
          prefix = [-1] * (pattern).length
          j = -1
          for (i in Array.from({length: 1, (pattern}, (_, i) => i).length)) {
              while (j > -1 && pattern[j + 1] != pattern[i]) {
                  j = prefix[j]
              if (pattern[j + 1] == pattern[i]) {
                  j += 1
              prefix[i] = j
          return prefix;

      prefix = getPrefix(pattern)
      j = -1
      for (i in Array.from({length: (text}, (_, i) => i).length)) {
          while (j != -1 && pattern[j+1] != text[i]) {
              j = prefix[j]
          if (pattern[j+1] == text[i]) {
              j += 1
          if (j+1 == (pattern).length) {
              return i-j;
      return -1;

  if (sentence.startswith(searchWord)) {
      return 1;
  p = KMP(sentence, ' ' + searchWord)
  if (p == -1) {
      return -1;
  return 1+sum(sentence[i] == ' ' for i in Array.from({length: p+1}, (_, i) => i));
}

export { isPrefixOfWord };
