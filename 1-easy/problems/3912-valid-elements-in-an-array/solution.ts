function findValidElements(nums: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :rtype: List[int]
  """
  right = [true]*(nums).length
  mx = 0
  for (i in reversed(Array.from({length: (nums}, (_, i) => i).length))) {
      right[i] = mx < nums[i]
      mx = max(mx, nums[i])
  result = []
  mx = 0
  for (i in Array.from({length: (nums}, (_, i) => i).length)) {
      left = mx < nums[i]
      mx = max(mx, nums[i])
      if (left || right[i]) {
          result.append(nums[i])
  return result;
}

export { findValidElements };
