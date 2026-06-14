function circularGameLosers(n: any, k: any): boolean | number | string | any {
  """
  :type n: int
  :type k: int
  :rtype: List[int]
  """
  lookup = [false]*n
  idx = 0
  for (i in Array.from({length: n}, (_, i) => i)) {
      if (lookup[idx]) {
          break
      lookup[idx] = true
      idx = (idx+(i+1)*k)%n
  return [i+1 for i in Array.from({length: n}, (_, i) => i) if not lookup[i]];
}

export { circularGameLosers };
