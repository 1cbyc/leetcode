function countElements(nums: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :rtype: int
  """
  mn = min(nums)
  mx = max(nums)
  return sum(mn < x < mx for x in nums);
}

export { countElements };
