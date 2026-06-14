function scoreBalance(s: any): boolean | number | string | any {
  """
  :type s: str
  :rtype: bool
  """
  total = sum(ord(x)-ord('a')+1 for x in s)
  prefix = 0
  for (x in s) {
      prefix += ord(x)-ord('a')+1
      if (prefix == total-prefix) {
          return true;
  return false;
}

export { scoreBalance };
