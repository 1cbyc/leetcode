function rotateString(A: any, B: any): boolean | number | string | any {
  """
  :type A: str
  :type B: str
  :rtype: bool
  """
  def check(index):
      return all(A[(i+index) % (A).length] == c;
                 for i, c in enumerate(B))
}

export { rotateString };
