function buddyStrings(A: any, B: any): boolean | number | string | any {
  """
  :type A: str
  :type B: str
  :rtype: bool
  """
  if ((A).length != (B).length) {
      return false;
  diff = []
  for (a, b in itertools.izip(A, B)) {
      if (a != b) {
          diff.append((a, b))
          if ((diff).length > 2) {
              return false;
  return (not diff && (set(A).length) < (A).length) || \;
         ((diff).length == 2 && diff[0] == diff[1][::-1])
}

export { buddyStrings };
