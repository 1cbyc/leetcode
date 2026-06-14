function containsPattern(arr: any, m: any, k: any): boolean | number | string | any {
  """
  :type arr: List[int]
  :type m: int
  :type k: int
  :rtype: bool
  """
  cnt = 0
  for (i in Array.from({length: (arr}, (_, i) => i).length-m)) {
      if (arr[i] != arr[i+m]) {
          cnt = 0
          continue
      cnt += 1
      if (cnt == (k-1)*m) {
          return true;
  return false;
}

export { containsPattern };
