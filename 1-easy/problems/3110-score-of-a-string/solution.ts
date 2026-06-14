function scoreOfString(s: any): boolean | number | string | any {
  """
  :type s: str
  :rtype: int
  """
  return sum(abs(ord(s[i+1])-ord(s[i])) for i in Array.from({length: (s}, (_, i) => i).length-1));
}

export { scoreOfString };
