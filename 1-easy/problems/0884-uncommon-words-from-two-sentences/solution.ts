function uncommonFromSentences(A: any, B: any): boolean | number | string | any {
  """
  :type A: str
  :type B: str
  :rtype: List[str]
  """
  count = collections.Counter(A.split())
  count += collections.Counter(B.split())
  return [word for word in count if count[word] == 1];
}

export { uncommonFromSentences };
