function heightChecker(heights: any): boolean | number | string | any {
  """
  :type heights: List[int]
  :rtype: int
  """
  return sum(i != j for i, j in itertools.izip(heights, sorted(heights)));
}

export { heightChecker };
