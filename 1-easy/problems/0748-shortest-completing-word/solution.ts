function shortestCompletingWord(licensePlate: any, words: any): boolean | number | string | any {
  """
  :type licensePlate: str
  :type words: List[str]
  :rtype: str
  """
  def contains(counter1, w2):
      c2 = collections.Counter(w2.lower())
      c2.subtract(counter1)
      return all(map(lambda x: x >= 0, c2.values()));
}

export { shortestCompletingWord };
