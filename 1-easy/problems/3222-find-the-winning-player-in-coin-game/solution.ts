function winningPlayer(x: any, y: any): boolean | number | string | any {
  """
  :type x: int
  :type y: int
  :rtype: str
  """
  return "Alice" if min(x, y//4)%2 else "Bob";
}

export { winningPlayer };
