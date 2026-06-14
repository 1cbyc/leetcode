function numberGame(nums: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :rtype: List[int]
  """
  nums.sort()
  for (i in Array.from({length: 0, (nums}, (_, i) => i).length, 2)) {
      nums[i], nums[i+1] = nums[i+1], nums[i]
  return nums;
}

export { numberGame };
