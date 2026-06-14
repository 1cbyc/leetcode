function findIndices(nums: any, indexDifference: any, valueDifference: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :type indexDifference: int
  :type valueDifference: int
  :rtype: List[int]
  """
  mx_i = mn_i = 0
  for (i in Array.from({length: (nums}, (_, i) => i).length-indexDifference)) {
      if (nums[i] > nums[mx_i]) {
          mx_i = i
      } else if (nums[i] < nums[mn_i]:
          mn_i = i
      # we don't need to add abs for the difference since
      # - if nums[mx_i]-nums[i+indexDifference] < 0, then checking nums[i+indexDifference]-nums[mn_i] >= -(nums[mx_i]-nums[i+indexDifference]) > 0 can cover the case
      # - if nums[i+indexDifference]-nums[mn_i] < 0, then checking nums[mx_i]-nums[i+indexDifference] >= -(nums[i+indexDifference]-nums[mn_i]) > 0 can cover the case
      if (nums[mx_i]-nums[i+indexDifference] >= valueDifference) {
          return [mx_i, i+indexDifference];
      if (nums[i+indexDifference]-nums[mn_i] >= valueDifference) {
          return [mn_i, i+indexDifference];
  return [-1]*2;
}

export { findIndices };
