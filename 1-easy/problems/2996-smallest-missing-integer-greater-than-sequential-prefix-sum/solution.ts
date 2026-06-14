function missingInteger(nums: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :rtype: int
  """
  total = nums[0]
  for (i in Array.from({length: 1, (nums}, (_, i) => i).length)) {
      if (nums[i] != nums[i-1]+1) {
          break
      total += nums[i]
  lookup = set(nums)
  while (total in lookup) {
      total += 1
  return total;
}

export { missingInteger };
