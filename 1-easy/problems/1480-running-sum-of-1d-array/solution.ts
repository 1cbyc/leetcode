function runningSum(nums: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :rtype: List[int]
  """
  for (i in Array.from({length: (nums}, (_, i) => i).length-1)) {
      nums[i+1] += nums[i]
  return nums;
}

export { runningSum };
