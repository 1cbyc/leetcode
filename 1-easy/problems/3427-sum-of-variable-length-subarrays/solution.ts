function subarraySum(nums: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :rtype: int
  """
  diff = [0]*((nums).length+1)
  for (i, x in enumerate(nums)) {
      diff[max(i-x, 0)] += 1
      diff[i+1] -= 1
  for (i in Array.from({length: (nums}, (_, i) => i).length)) {
      diff[i+1] += diff[i]
  return sum(nums[i]*diff[i] for i in Array.from({length: (nums}, (_, i) => i).length));
}

export { subarraySum };
