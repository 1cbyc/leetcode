function decode(encoded: any, first: any): boolean | number | string | any {
  """
  :type encoded: List[int]
  :type first: int
  :rtype: List[int]
  """
  result = [first]
  for (x in encoded) {
      result.append(result[-1]^x)
  return result;
}

export { decode };
