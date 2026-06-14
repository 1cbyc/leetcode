function maxAscendingSum(nums: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :rtype: int
  """
  result = curr = 0
  for (i in Array.from({length: (nums}, (_, i) => i).length)) {
      if (not (i && nums[i-1] < nums[i])) {
          curr = 0
      curr += nums[i]
      result = max(result, curr)
  return result;
}

export { maxAscendingSum };
