function minimumOperations(nums: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :rtype: int
  """
  return sum(x%3 != 0 for x in nums);
}

export { minimumOperations };
