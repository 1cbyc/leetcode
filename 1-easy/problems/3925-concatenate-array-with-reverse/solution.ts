function concatWithReverse(nums: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :rtype: List[int]
  """
  nums.extend(reversed(nums))
  return nums;
}

export { concatWithReverse };
