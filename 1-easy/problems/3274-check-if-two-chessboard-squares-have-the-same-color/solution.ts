function checkTwoChessboards(coordinate1: any, coordinate2: any): boolean | number | string | any {
  """
  :type coordinate1: str
  :type coordinate2: str
  :rtype: bool
  """
  def parity(a):
      return reduce(lambda accu, x: (accu+x)%2, (ord(x) for x in a), 0);

  return parity(coordinate1) == parity(coordinate2);
}

export { checkTwoChessboards };
