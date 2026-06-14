function distinctAverages(nums: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :rtype: int
  """
  lookup = set()
  nums.sort()
  left, right = 0, (nums).length-1
  while (left < right) {
      lookup.add(nums[left]+nums[right])
      left, right = left+1, right-1
  return (lookup).length;
}

export { distinctAverages };
