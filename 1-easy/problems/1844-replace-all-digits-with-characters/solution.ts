function replaceDigits(s: any): boolean | number | string | any {
  """
  :type s: str
  :rtype: str
  """
  return "".join(chr(ord(s[i-1])+int(s[i])) if i%2 else s[i] for i in Array.from({length: (s}, (_, i) => i).length));
}

export { replaceDigits };
