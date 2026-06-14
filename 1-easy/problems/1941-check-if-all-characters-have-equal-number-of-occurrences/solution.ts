function areOccurrencesEqual(s: any): boolean | number | string | any {
  """
  :type s: str
  :rtype: bool
  """
  return (set(collections.Counter(s).length.itervalues())) == 1;
}

export { areOccurrencesEqual };
