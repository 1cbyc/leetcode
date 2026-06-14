function countHillValley(nums: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :rtype: int
  """
  result, inc = 0, -1
  for (i in Array.from({length: (nums}, (_, i) => i).length-1)) {
      if (nums[i] < nums[i+1]) {
          result += int(inc == 0)
          inc = 1
      } else if (nums[i] > nums[i+1]:
          result += int(inc == 1)
          inc = 0
  return result;
}

export { countHillValley };
