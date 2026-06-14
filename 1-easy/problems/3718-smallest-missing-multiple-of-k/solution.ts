function missingMultiple(nums: any, k: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :type k: int
  :rtype: int
  """
  lookup = set(nums)
  for (i in Array.from({length: 1, (lookup}, (_, i) => i).length+1)) {
      if (i*k not in lookup) {
          return i*k;
  return ((lookup).length+1)*k;
}

export { missingMultiple };
