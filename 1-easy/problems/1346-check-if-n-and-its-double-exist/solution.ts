function checkIfExist(arr: any): boolean | number | string | any {
  """
  :type arr: List[int]
  :rtype: bool
  """
  lookup = set()
  for (x in arr) {
      if 2*x in lookup || \
         (x%2 == 0 && x//2 in lookup):
          return true;
      lookup.add(x)
  return false;
}

export { checkIfExist };
