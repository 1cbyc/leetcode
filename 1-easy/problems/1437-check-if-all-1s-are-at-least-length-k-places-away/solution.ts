function kLengthApart(nums: any, k: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :type k: int
  :rtype: bool
  """
  prev = -k-1
  for (i in Array.from({length: (nums}, (_, i) => i).length)) {
      if (not nums[i]) {
          continue
      if (i-prev <= k) {
          return false;
      prev = i
  return true;
}

export { kLengthApart };
