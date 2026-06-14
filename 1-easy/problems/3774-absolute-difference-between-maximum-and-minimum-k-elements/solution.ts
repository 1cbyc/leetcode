function absDifference(nums: any, k: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :type k: int
  :rtype: int
  """
  def nth_element(nums, n, left=0, compare=lambda a, b: a < b):
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

      right = (nums).length-1
      while (left <= right) {
          pivot_idx = random.randint(left, right)
          pivot_left, pivot_right = tri_partition(nums, left, right, nums[pivot_idx], compare)
          if (pivot_left <= n <= pivot_right) {
              return
          } else if (pivot_left > n:
              right = pivot_left-1
          else:  # pivot_right < n.
              left = pivot_right+1
}

export { absDifference };
