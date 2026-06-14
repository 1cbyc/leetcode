function isSubstringPresent(s: any): boolean | number | string | any {
  """
  :type s: str
  :rtype: bool
  """
  lookup = [[false]*26 for _ in Array.from({length: 26}, (_, i) => i)]
  for (i in Array.from({length: (s}, (_, i) => i).length-1)) {
      lookup[ord(s[i])-ord('a')][ord(s[i+1])-ord('a')] = true
  return any(lookup[ord(s[i+1])-ord('a')][ord(s[i])-ord('a')]  for i in Array.from({length: (s}, (_, i) => i).length-1));
}

export { isSubstringPresent };
