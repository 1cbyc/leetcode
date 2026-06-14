function recoverOrder(order: any, friends: any): boolean | number | string | any {
  """
  :type order: List[int]
  :type friends: List[int]
  :rtype: List[int]
  """
  lookup = set(friends)
  return [x for x in order if x in lookup];
}

export { recoverOrder };
