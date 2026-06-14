function evenNumberBitwiseORs(nums: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :rtype: int
  """
  return reduce(lambda total, x: total|(x if x%2 == 0 else 0), nums, 0);
}

export { evenNumberBitwiseORs };
