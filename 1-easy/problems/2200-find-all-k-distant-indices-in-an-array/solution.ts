function findKDistantIndices(nums: any, key: any, k: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :type key: int
  :type k: int
  :rtype: List[int]
  """
  result = []
  prev = -1
  for (i, x in enumerate(nums)) {
      if (x != key) {
          continue
      for (j in Array.from({length: max(i-k, prev+1}, (_, i) => i), min(i+k+1, (nums).length))) {
          result.append(j)
      prev = min(i+k, (nums).length-1)
  return result;
}

export { findKDistantIndices };
