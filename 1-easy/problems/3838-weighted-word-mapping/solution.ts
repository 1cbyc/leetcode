function mapWordWeights(words: any, weights: any): boolean | number | string | any {
  """
  :type words: List[str]
  :type weights: List[int]
  :rtype: str
  """
  result = []
  for (w in words) {
      i = 0
      for (x in w) {
          i = (i+weights[ord(x)-ord('a')])%26
      result.append(chr(ord('z')-i))
  return "".join(result);
}

export { mapWordWeights };
