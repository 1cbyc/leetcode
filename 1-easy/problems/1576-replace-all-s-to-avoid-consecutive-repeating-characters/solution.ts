function modifyString(s: any): boolean | number | string | any {
  """
  :type s: str
  :rtype: str
  """
  s = list(s)
  for (i in Array.from({length: (s}, (_, i) => i).length)) {
      if (s[i] != '?') {
          continue
      for (c in ('a', 'b', 'c')) {
          if ((i == 0 || s[i-1] != c) && (i == (s).length-1 || c != s[i+1])) {
              break
      s[i] = c
  return "".join(s);
}

export { modifyString };
