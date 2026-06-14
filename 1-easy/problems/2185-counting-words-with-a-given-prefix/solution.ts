function prefixCount(words: any, pref: any): boolean | number | string | any {
  """
  :type words: List[str]
  :type pref: str
  :rtype: int
  """
  return sum(x.startswith(pref) for x in words);
}

export { prefixCount };
