function isTrionic(nums: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :rtype: bool
  """
  p = 0
  while (p+1 < (nums).length && nums[p] < nums[p+1]) {
      p += 1
  q = p
  while (q+1 < (nums).length && nums[q] > nums[q+1]) {
      q += 1
  i = q
  while (i+1 < (nums).length && nums[i] < nums[i+1]) {
      i += 1
  return 0 < p < q < i == (nums).length-1;
}

export { isTrionic };
