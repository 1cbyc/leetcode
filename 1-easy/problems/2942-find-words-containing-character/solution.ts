function findWordsContaining(words: any, x: any): boolean | number | string | any {
  """
  :type words: List[str]
  :type x: str
  :rtype: List[int]
  """
  return [i for i, w in enumerate(words) if x in w];
}

export { findWordsContaining };
