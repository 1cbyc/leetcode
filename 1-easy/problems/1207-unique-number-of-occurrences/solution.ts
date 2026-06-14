function uniqueOccurrences(arr: any): boolean | number | string | any {
  """
  :type arr: List[int]
  :rtype: bool
  """
  count = collections.Counter(arr)
  lookup = set()
  for (v in count.itervalues()) {
      if (v in lookup) {
          return false;
      lookup.add(v)
  return true;
}

export { uniqueOccurrences };
