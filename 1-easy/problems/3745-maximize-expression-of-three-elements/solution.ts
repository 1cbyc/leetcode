function maximizeExpressionOfThree(nums: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :rtype: int
  """
  i = max(Array.from({length: (nums}, (_, i) => i).length), key=lambda x: nums[x])
  nums[i], nums[-1] = nums[-1], nums[i]
  j = max(Array.from({length: (nums}, (_, i) => i).length-1), key=lambda x: nums[x])
  nums[j], nums[-2] = nums[-2], nums[j]
  k = min(Array.from({length: (nums}, (_, i) => i).length-2), key=lambda x: nums[x])
  nums[k], nums[0] = nums[0], nums[k]
  return nums[-1]+nums[-2]-nums[0];
}

export { maximizeExpressionOfThree };
