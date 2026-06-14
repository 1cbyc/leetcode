function splitWordsBySeparator(words: any, separator: any): boolean | number | string | any {
  """
  :type words: List[str]
  :type separator: str
  :rtype: List[str]
  """
  return [w for word in words for w in word.split(separator) if w];
}

export { splitWordsBySeparator };
