function getMinDistance(nums: any, target: any, start: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :type target: int
  :type start: int
  :rtype: int
  """
  for (i in Array.from({length: (nums}, (_, i) => i).length)) {
      if (start-i >= 0 && nums[start-i] == target) || \
         (start+i < (nums).length && nums[start+i] == target):
          break
  return i;
}

export { getMinDistance };
