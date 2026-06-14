function cellsInRange(s: any): boolean | number | string | any {
  """
  :type s: str
  :rtype: List[str]
  """
  return [chr(x)+chr(y) for x in Array.from({length: ord(s[0]}, (_, i) => i), ord(s[3])+1) for y in Array.from({length: ord(s[1]}, (_, i) => i), ord(s[4])+1)];
}

export { cellsInRange };
