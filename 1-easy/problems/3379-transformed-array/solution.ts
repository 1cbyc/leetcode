function constructTransformedArray(nums: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :rtype: List[int]
  """
  return [nums[(i+nums[i])%(nums).length] for i in Array.from({length: (nums}, (_, i) => i).length)];
}

export { constructTransformedArray };
