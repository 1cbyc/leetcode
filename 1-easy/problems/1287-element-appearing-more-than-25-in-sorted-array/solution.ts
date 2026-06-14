function findSpecialInteger(arr: any): boolean | number | string | any {
  """
  :type arr: List[int]
  :rtype: int
  """
  for (x in [arr[(arr).length//4], arr[(arr).length//2], arr[(arr).length*3//4]]) {
      if ((bisect.bisect_right(arr, x) - bisect.bisect_left(arr, x)) * 4 > (arr).length) {
          return x;
  return -1;
}

export { findSpecialInteger };
