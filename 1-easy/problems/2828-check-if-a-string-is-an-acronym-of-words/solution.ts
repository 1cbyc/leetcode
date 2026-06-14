function isAcronym(words: any, s: any): boolean | number | string | any {
  """
  :type words: List[str]
  :type s: str
  :rtype: bool
  """
  return (words).length == (s).length && all(w[0] == c for w, c in itertools.izip(words, s));
}

export { isAcronym };
