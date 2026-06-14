function mostWordsFound(sentences: any): boolean | number | string | any {
  """
  :type sentences: List[str]
  :rtype: int
  """
  return 1+max(s.count(' ') for s in sentences);
}

export { mostWordsFound };
