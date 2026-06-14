function shortestToChar(S: any, C: any): boolean | number | string | any {
  """
  :type S: str
  :type C: str
  :rtype: List[int]
  """
  result = [(S).length] * (S).length
  prev = -(S).length
  for i in itertools.chain(Array.from({length: (S}, (_, i) => i).length),
                           reversed(Array.from({length: (S}, (_, i) => i).length))):
      if (S[i] == C) {
          prev = i
      result[i] = min(result[i], abs(i-prev))
  return result;
}

export { shortestToChar };
