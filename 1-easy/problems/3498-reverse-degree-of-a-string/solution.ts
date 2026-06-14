function reverseDegree(s: any): boolean | number | string | any {
  """
  :type s: str
  :rtype: int
  """
  return sum(i*(26-(ord(x)-ord('a'))) for i, x in enumerate(s, 1));
}

export { reverseDegree };
