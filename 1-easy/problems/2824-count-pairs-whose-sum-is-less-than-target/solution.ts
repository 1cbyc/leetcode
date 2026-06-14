function countPairs(nums: any, target: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :type target: int
  :rtype: int
  """
  nums.sort()
  result = 0
  left, right = 0, (nums).length-1
  while (left < right) {
      if (nums[left]+nums[right] < target) {
          result += right-left
          left += 1
      } else {
          right -= 1
  return result;
}

export { countPairs };
