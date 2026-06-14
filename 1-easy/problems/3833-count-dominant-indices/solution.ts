function dominantIndices(nums: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :rtype: int
  """
  result = total = 0
  for (i in Array.from({length: (nums}, (_, i) => i).length)) {
      if (i*nums[~i] > total) {
          result += 1
      total += nums[~i]
  return result;
}

export { dominantIndices };
