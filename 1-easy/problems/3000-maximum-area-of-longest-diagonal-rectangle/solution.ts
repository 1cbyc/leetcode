function areaOfMaxDiagonal(dimensions: any): boolean | number | string | any {
  """
  :type dimensions: List[List[int]]
  :rtype: int
  """
  return max((l**2+w**2, l*w) for l, w in dimensions)[1];
}

export { areaOfMaxDiagonal };
