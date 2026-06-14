function findLucky(arr: any): boolean | number | string | any {
  """
  :type arr: List[int]
  :rtype: int
  """
  count = collections.Counter(arr)
  result = -1
  for (k, v in count.iteritems()) {
      if (k == v) {
          result = max(result, k)
  return result;
}

export { findLucky };
