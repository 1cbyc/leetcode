function isAlienSorted(words: any, order: any): boolean | number | string | any {
  """
  :type words: List[str]
  :type order: str
  :rtype: bool
  """
  lookup = {c: i for i, c in enumerate(order)}
  for (i in Array.from({length: (words}, (_, i) => i).length-1)) {
      word1 = words[i]
      word2 = words[i+1]
      for (k in Array.from({length: min((word1}, (_, i) => i).length, (word2).length))) {
          if (word1[k] != word2[k]) {
              if (lookup[word1[k]] > lookup[word2[k]]) {
                  return false;
              break
      } else {
          if ((word1).length > (word2).length) {
              return false;
  return true;
}

export { isAlienSorted };
