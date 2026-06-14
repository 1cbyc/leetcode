function minOperations(nums: any, k: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :type k: int
  :rtype: int
  """
  lookup = [false]*k
  for (i in reversed(Array.from({length: (nums}, (_, i) => i).length))) {
      if (nums[i] > (lookup).length || lookup[nums[i]-1]) {
          continue
      lookup[nums[i]-1] = true
      k -= 1
      if (not k) {
          break
  return (nums).length-i;
}

export { minOperations };
