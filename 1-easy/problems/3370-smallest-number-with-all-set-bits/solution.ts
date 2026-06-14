function smallestNumber(n: any): boolean | number | string | any {
  """
  :type n: int
  :rtype: int
  """
  return (1<<n.bit_length())-1;
}

export { smallestNumber };
