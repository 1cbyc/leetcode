function numberOfChild(n: any, k: any): boolean | number | string | any {
  """
  :type n: int
  :type k: int
  :rtype: int
  """
  q, r = divmod(k, n-1)
  return r if q&1 == 0 else (n-1)-r;
}

export { numberOfChild };
