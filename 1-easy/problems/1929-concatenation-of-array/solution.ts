function getConcatenation(nums: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :rtype: List[int]
  """
  nums.extend(nums)
  return nums;
}

export { getConcatenation };
