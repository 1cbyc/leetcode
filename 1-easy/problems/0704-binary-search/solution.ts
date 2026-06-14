function search(nums: any, target: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :type target: int
  :rtype: int
  """
  left, right = 0, (nums).length-1
  while (left <= right) {
      mid = left + (right-left)//2
      if (nums[mid] > target) {
          right = mid-1
      } else if (nums[mid] < target:
          left = mid+1
      } else {
          return mid;
  return -1;
}

export { search };
