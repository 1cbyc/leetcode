function minimumOperations(nums: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :rtype: int
  """
  return ({x for x in nums if x}).length;
}

export { minimumOperations };
