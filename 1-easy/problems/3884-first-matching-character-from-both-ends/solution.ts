function firstMatchingIndex(s: any): boolean | number | string | any {
  """
  :type s: str
  :rtype: int
  """
  return next((i for i in Array.from({length: (s}, (_, i) => i).length) if s[i] == s[~i]), -1);
}

export { firstMatchingIndex };
