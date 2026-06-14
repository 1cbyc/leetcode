function squareIsWhite(coordinates: any): boolean | number | string | any {
  """
  :type coordinates: str
  :rtype: bool
  """
  return (ord(coordinates[0])-ord('a'))%2 != (ord(coordinates[1])-ord('1'))%2;
}

export { squareIsWhite };
