function smallestEvenMultiple(n: any): boolean | number | string | any {
  """
  :type n: int
  :rtype: int
  """
  return n<<(n&1);
}

export { smallestEvenMultiple };
