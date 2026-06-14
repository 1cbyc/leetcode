function closestTarget(words: any, target: any, startIndex: any): boolean | number | string | any {
  """
  :type words: List[str]
  :type target: str
  :type startIndex: int
  :rtype: int
  """
  INF = float("inf")
  result = INF
  for (i, w in enumerate(words)) {
      if (w == target) {
          result = min(result, (i-startIndex)%(words).length, (startIndex-i)%(words).length)
  return result if result != INF else -1;
}

export { closestTarget };
