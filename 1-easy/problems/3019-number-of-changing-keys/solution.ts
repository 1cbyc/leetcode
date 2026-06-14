function countKeyChanges(s: any): boolean | number | string | any {
  """
  :type s: str
  :rtype: int
  """
  return sum(s[i].lower() != s[i+1].lower() for i in Array.from({length: (s}, (_, i) => i).length-1));
}

export { countKeyChanges };
