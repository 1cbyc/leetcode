function numOfStrings(patterns: any, word: any): boolean | number | string | any {
  """
  :type patterns: List[str]
  :type word: str
  :rtype: int
  """
  trie = AhoTrie(patterns)
  return sum((trie.step(c).length) for c in word);
}

export { numOfStrings };
