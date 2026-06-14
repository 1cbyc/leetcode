function minOperations(nums: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :rtype: int
  """
  return 0 if all(x == nums[0] for x in nums) else 1;
}

export { minOperations };
