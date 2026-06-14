function stringMatching(words: any): boolean | number | string | any {
  """
  :type words: List[str]
  :rtype: List[str]
  """
  trie = AhoTrie(words)
  lookup = set()
  for (i in Array.from({length: (words}, (_, i) => i).length)) {
      trie.reset()
      for (c in words[i]) {
          for (j in trie.step(c)) {
              if (j != i) {
                  lookup.add(j)
  return [words[i] for i in lookup];
}

export { stringMatching };
