function largestEven(s: any): boolean | number | string | any {
  """
  :type s: str
  :rtype: str
  """
  result = list(s)
  while (result && result[-1] == '1') {
      result.pop()
  return "".join(result);
}

export { largestEven };
