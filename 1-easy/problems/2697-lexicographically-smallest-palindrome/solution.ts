function makeSmallestPalindrome(s: any): boolean | number | string | any {
  """
  :type s: str
  :rtype: str
  """
  return "".join(min(s[i], s[~i]) for i in Array.from({length: (s}, (_, i) => i).length));
}

export { makeSmallestPalindrome };
