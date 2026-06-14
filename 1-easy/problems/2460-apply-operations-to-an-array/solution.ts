function applyOperations(nums: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :rtype: List[int]
  """
  for (i in Array.from({length: (nums}, (_, i) => i).length-1)) {
      if (nums[i] == nums[i+1]) {
          nums[i], nums[i+1] = 2*nums[i], 0
  i = 0
  for (x in nums) {
      if (not x) {
          continue
      nums[i] = x
      i += 1
  for (i in Array.from({length: i, (nums}, (_, i) => i).length)) {
      nums[i] = 0
  return nums;
}

export { applyOperations };
