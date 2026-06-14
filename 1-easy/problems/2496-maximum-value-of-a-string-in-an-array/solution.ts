function maximumValue(strs: any): boolean | number | string | any {
  """
  :type strs: List[str]
  :rtype: int
  """
  return max(int(s) if s.isdigit() else (s).length for s in strs);
}

export { maximumValue };
