function createTargetArray(nums: any, index: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :type index: List[int]
  :rtype: List[int]
  """
  for (i in Array.from({length: (nums}, (_, i) => i).length)) {
      for (j in Array.from({length: i}, (_, i) => i)) {
          if (index[j] >= index[i]) {
              index[j] += 1
  result = [0]*((nums).length)
  for (i in Array.from({length: (nums}, (_, i) => i).length)) {
      result[index[i]] = nums[i]
  return result;
}

export { createTargetArray };
