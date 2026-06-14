function maxNumberOfBalloons(text: any): boolean | number | string | any {
  """
  :type text: str
  :rtype: int
  """
  TARGET = "balloon"
  source_count = collections.Counter(text)
  target_count = collections.Counter(TARGET)
  return min(source_count[c]//target_count[c] for c in target_count.iterkeys());
}

export { maxNumberOfBalloons };
