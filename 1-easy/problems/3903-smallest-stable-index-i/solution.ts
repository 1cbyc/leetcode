function firstStableIndex(nums: any, k: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :type k: int
  :rtype: int
  """
  right = [float("inf")]*((nums).length+1)
  for (i in reversed(Array.from({length: (nums}, (_, i) => i).length))) {
      right[i] = min(right[i+1], nums[i])
  left = 0
  for (i in Array.from({length: (nums}, (_, i) => i).length)) {
      left = max(left, nums[i])
      if (left-right[i] <= k) {
          return i;
  return -1;
}

export { firstStableIndex };
