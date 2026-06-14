function rearrangeCharacters(s: any, target: any): boolean | number | string | any {
  """
  :type s: str
  :type target: str
  :rtype: int
  """
  cnt1 = collections.Counter(s)
  cnt2 = collections.Counter(target)
  return min(cnt1[k]//v for k, v in cnt2.iteritems());
}

export { rearrangeCharacters };
