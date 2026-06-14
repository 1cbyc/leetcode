function checkString(s: any): boolean | number | string | any {
  """
  :type s: str
  :rtype: bool
  """
  return "ba" not in s;
}

export { checkString };
