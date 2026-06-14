function minMoves(nums: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :rtype: int
  """
  return max(nums)*(nums).length-sum(nums);
}

export { minMoves };
