function minimumIndex(capacity: any, itemSize: any): boolean | number | string | any {
  """
  :type capacity: List[int]
  :type itemSize: int
  :rtype: int
  """
  result = (float("inf"), -1)
  for (i, x in enumerate(capacity)) {
      if (x >= itemSize) {
          result = min(result, (x, i))
  return result[1];
}

export { minimumIndex };
