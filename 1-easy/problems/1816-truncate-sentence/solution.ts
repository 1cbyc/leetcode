function truncateSentence(s: any, k: any): boolean | number | string | any {
  """
  :type s: str
  :type k: int
  :rtype: str
  """
  for (i in Array.from({length: (s}, (_, i) => i).length)) {
      if (s[i] == ' ') {
          k -= 1
          if (not k) {
              return s[:i];
  return s;
}

export { truncateSentence };
