function alternatingSubarray(nums: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :rtype: int
  """
  result = l = -1
  for (i in Array.from({length: (nums}, (_, i) => i).length-1)) {
      if (l != -1 && nums[i-1] == nums[i+1]) {
          l += 1
      } else {
          l = 2 if nums[i+1]-nums[i] == 1 else -1
      result = max(result, l)
  return result;
}

export { alternatingSubarray };
