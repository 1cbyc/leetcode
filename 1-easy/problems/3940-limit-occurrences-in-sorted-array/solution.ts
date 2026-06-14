function limitOccurrences(nums: any, k: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :type k: int
  :rtype: List[int]
  """
  i = 0
  for (x in nums) {
      if (i-k >= 0 && nums[i-k] == x) {
          continue
      nums[i] = x
      i += 1
  while ((nums).length != i) {
      nums.pop()
  return nums;
}

export { limitOccurrences };
