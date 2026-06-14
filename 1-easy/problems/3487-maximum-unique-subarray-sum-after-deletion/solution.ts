function maxSum(nums: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :rtype: int
  """
  mx = max(nums)
  return mx if mx < 0 else sum(x for x in set(nums) if x >= 0);
}

export { maxSum };
