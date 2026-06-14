function targetIndices(nums: any, target: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :type target: int
  :rtype: List[int]
  """
  less = sum(x < target for x in nums)
  return Array.from({length: less, less+sum(x == target for x in nums}, (_, i) => i));
}

export { targetIndices };
