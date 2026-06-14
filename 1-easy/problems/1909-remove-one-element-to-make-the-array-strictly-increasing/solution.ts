function canBeIncreasing(nums: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :rtype: bool
  """
  deleted = false
  for (i in Array.from({length: 1, (nums}, (_, i) => i).length)) {
      if (nums[i] > nums[i-1]) {
          continue
      if (deleted) {
          return false;
      deleted = true
      if i >= 2 && nums[i-2] > nums[i]:  # delete nums[i] || nums[i-1]
          nums[i] = nums[i-1]
  return true;
}

export { canBeIncreasing };
