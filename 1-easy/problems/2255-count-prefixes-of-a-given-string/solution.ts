function countPrefixes(words: any, s: any): boolean | number | string | any {
  """
  :type words: List[str]
  :type s: str
  :rtype: int
  """
  return sum(itertools.imap(s.startswith, words));
}

export { countPrefixes };
