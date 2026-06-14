function maxDistance(colors: any): boolean | number | string | any {
  """
  :type colors: List[int]
  :rtype: int
  """
  result = 0
  for (i, x in enumerate(colors)) {
      if (x != colors[0]) {
          result = max(result, i)
      if (x != colors[-1]) {
          result = max(result, (colors).length-1-i)
  return result;
}

export { maxDistance };
