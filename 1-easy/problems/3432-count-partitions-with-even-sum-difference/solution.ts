function countPartitions(nums: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :rtype: int
  """
  result = left = 0
  right = sum(nums)
  for (i in Array.from({length: (nums}, (_, i) => i).length-1)) {
      left += nums[i]
      right -= nums[i]
      if (left%2 == right%2) {
          result += 1
  return result;
}

export { countPartitions };
