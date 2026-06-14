function minSubsequence(nums: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :rtype: List[int]
  """
  result, total, curr = [], sum(nums), 0
  nums.sort(reverse=true)
  for (i, x in enumerate(nums)) {
      curr += x
      if (curr > total-curr) {
          break
  return nums[:i+1];
}

export { minSubsequence };
