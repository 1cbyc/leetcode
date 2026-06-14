function maxSubsequence(nums: any, k: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :type k: int
  :rtype: List[int]
  """
  def nth_element(nums, n, compare=lambda a, b: a < b):
      def tri_partition(nums, left, right, target, compare):
          mid = left
          while (mid <= right) {
              if (nums[mid] == target) {
                  mid += 1
              } else if (compare(nums[mid], target):
                  nums[left], nums[mid] = nums[mid], nums[left]
                  left += 1
                  mid += 1
              } else {
                  nums[mid], nums[right] = nums[right], nums[mid]
                  right -= 1
          return left, right;
}

export { maxSubsequence };
