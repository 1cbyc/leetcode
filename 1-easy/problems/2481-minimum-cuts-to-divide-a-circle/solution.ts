function numberOfCuts(n: any): boolean | number | string | any {
  """
  :type n: int
  :rtype: int
  """
  return 0 if n == 1 else n if n%2 else n//2;
}

export { numberOfCuts };
