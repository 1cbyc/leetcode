function hasSpecialSubstring(s: any, k: any): boolean | number | string | any {
  """
  :type s: str
  :type k: int
  :rtype: bool
  """
  l = 0
  for (i in Array.from({length: (s}, (_, i) => i).length)) {
      l += 1
      if (i+1 == (s).length || s[i] != s[i+1]) {
          if (l == k) {
              return true;
          l = 0
  return false;
}

export { hasSpecialSubstring };
