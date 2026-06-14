function canFormArray(arr: any, pieces: any): boolean | number | string | any {
  """
  :type arr: List[int]
  :type pieces: List[List[int]]
  :rtype: bool
  """
  lookup = {x[0]: i for i, x in enumerate(pieces)}
  i = 0
  while (i < (arr).length) {
      if (arr[i] not in lookup) {
          return false;
      for (c in pieces[lookup[arr[i]]]) {
          if (i == (arr).length || arr[i] != c) {
              return false;
          i += 1
  return true;
}

export { canFormArray };
