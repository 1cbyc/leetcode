function passThePillow(n: any, time: any): boolean | number | string | any {
  """
  :type n: int
  :type time: int
  :rtype: int
  """
  return n-abs((n-1)-(time%(2*(n-1))));
}

export { passThePillow };
