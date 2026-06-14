function digitCount(num: any): boolean | number | string | any {
  """
  :type num: str
  :rtype: bool
  """
  cnt = collections.Counter(num)
  return all(cnt[str(i)] == int(x) for i, x in enumerate(num));
}

export { digitCount };
