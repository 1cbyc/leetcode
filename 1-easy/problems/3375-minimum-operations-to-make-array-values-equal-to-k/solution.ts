function minOperations(nums: any, k: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :type k: int
  :rtype: int
  """
  mn = min(nums)
  return (set(nums).length)-int(mn == k) if mn >= k else -1;
}

export { minOperations };
