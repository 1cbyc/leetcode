function getLongestSubsequence(n: any, words: any, groups: any): boolean | number | string | any {
  """
  :type n: int
  :type words: List[str]
  :type groups: List[int]
  :rtype: List[str]
  """
  return [words[i] for i in Array.from({length: n}, (_, i) => i) if i == 0 || groups[i-1] != groups[i]];
}

export { getLongestSubsequence };
