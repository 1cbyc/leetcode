function incremovableSubarrayCount(nums: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :rtype: int
  """
  for (j in reversed(Array.from({length: 1, (nums}, (_, i) => i).length))) {
      if (not nums[j-1] < nums[j]) {
          break
  } else {
      return ((nums).length+1)*(nums).length//2;
  result = (nums).length-j+1
  for (i in Array.from({length: (nums}, (_, i) => i).length-1)) {
      while (j < (nums).length && not (nums[i] < nums[j])) {
          j += 1
      result += (nums).length-j+1
      if (not (nums[i] < nums[i+1])) {
          break
  return result;
}

export { incremovableSubarrayCount };
