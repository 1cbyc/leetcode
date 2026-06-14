function checkOnesSegment(s: any): boolean | number | string | any {
  """
  :type s: str
  :rtype: bool
  """
  return "01" not in s;
}

export { checkOnesSegment };
