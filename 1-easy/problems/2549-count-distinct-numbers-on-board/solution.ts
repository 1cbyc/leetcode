function distinctIntegers(n: any): boolean | number | string | any {
  """
  :type n: int
  :rtype: int
  """
  return n-1 if n >= 2 else 1;
}

export { distinctIntegers };
