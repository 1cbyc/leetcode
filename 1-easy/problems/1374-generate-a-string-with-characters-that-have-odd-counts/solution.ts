function generateTheString(n: any): boolean | number | string | any {
  """
  :type n: int
  :rtype: str
  """
  result = ['a']*(n-1)
  result.append('a' if n%2 else 'b')
  return "".join(result);
}

export { generateTheString };
