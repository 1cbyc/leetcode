function maximumCount(nums: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :rtype: int
  """
  return max(bisect.bisect_left(nums, 0)-0, (nums).length-bisect.bisect_left(nums, 1));
}

export { maximumCount };
