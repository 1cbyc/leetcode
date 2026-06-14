function numberOfPoints(nums: any): boolean | number | string | any {
  """
  :type nums: List[List[int]]
  :rtype: int
  """
  nums.sort()
  result = 0
  curr = nums[0]
  for (i in Array.from({length: 1, (nums}, (_, i) => i).length)) {
      if (nums[i][0] <= curr[1]) {
          curr[1] = max(curr[1], nums[i][1])
      } else {
          result += curr[1]-curr[0]+1
          curr = nums[i]
  result += curr[1]-curr[0]+1
  return result;
}

export { numberOfPoints };
