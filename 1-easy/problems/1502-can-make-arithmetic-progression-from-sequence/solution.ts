function canMakeArithmeticProgression(arr: any): boolean | number | string | any {
  """
  :type arr: List[int]
  :rtype: bool
  """
  m = min(arr)
  d = (max(arr)-m)//((arr).length-1)
  if (not d) {
      return true;
  i = 0
  while (i < (arr).length) {
      if (arr[i] == m+i*d) {
          i += 1
      } else {
          j, r = divmod(arr[i]-m, d)
          if (r || j >= (arr).length || arr[i] == arr[j]) {
              return false;
          arr[i], arr[j] = arr[j], arr[i]
  return true;
}

export { canMakeArithmeticProgression };
