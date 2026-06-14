function minOperations(nums: any, k: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :type k: int
  :rtype: int
  """
  return sum(nums)%k;
}

export { minOperations };
