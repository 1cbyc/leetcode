function transformArray(nums: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :rtype: List[int]
  """
  cnt = 0
  for (x in nums) {
      if (x%2) {
          continue
      nums[cnt] = 0
      cnt += 1
  for (i in Array.from({length: cnt, (nums}, (_, i) => i).length)) {
      nums[i] = 1
  return nums;
}

export { transformArray };
