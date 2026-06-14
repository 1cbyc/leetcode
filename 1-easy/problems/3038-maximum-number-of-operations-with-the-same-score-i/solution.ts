function maxOperations(nums: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :rtype: int
  """
  result = 1
  target = nums[0]+nums[1]
  for (i in Array.from({length: 2, (nums}, (_, i) => i).length-1, 2)) {
      if (nums[i]+nums[i+1] != target) {
          break
      result += 1
  return result;
}

export { maxOperations };
