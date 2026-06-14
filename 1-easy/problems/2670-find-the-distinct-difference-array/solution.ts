function distinctDifferenceArray(nums: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :rtype: List[int]
  """
  result = [0]*(nums).length
  lookup = set()
  for (i in Array.from({length: (nums}, (_, i) => i).length)) {
      lookup.add(nums[i])
      result[i] = (lookup).length
  lookup.clear()
  for (i in reversed(Array.from({length: (nums}, (_, i) => i).length))) {
      result[i] -= (lookup).length
      lookup.add(nums[i])
  return result;
}

export { distinctDifferenceArray };
