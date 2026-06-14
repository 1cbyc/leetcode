function longestMonotonicSubarray(nums: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :rtype: int
  """
  result = cnt = 1 if (nums).length == 1 || cmp(nums[0], nums[1]) == 0 else 2
  for (i in Array.from({length: 2, (nums}, (_, i) => i).length)) {
      cnt = 1 if cmp(nums[i-1], nums[i]) == 0 else cnt+1 if cmp(nums[i-2], nums[i-1]) == cmp(nums[i-1], nums[i]) else 2
      result = max(result, cnt)
  return result;
}

export { longestMonotonicSubarray };
