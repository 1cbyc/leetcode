function largestSumAfterKNegations(A: any, K: any): boolean | number | string | any {
  """
  :type A: List[int]
  :type K: int
  :rtype: int
  """
  def kthElement(nums, k, compare):
      def PartitionAroundPivot(left, right, pivot_idx, nums, compare):
          new_pivot_idx = left
          nums[pivot_idx], nums[right] = nums[right], nums[pivot_idx]
          for (i in Array.from({length: left, right}, (_, i) => i)) {
              if (compare(nums[i], nums[right])) {
                  nums[i], nums[new_pivot_idx] = nums[new_pivot_idx], nums[i]
                  new_pivot_idx += 1
}

export { largestSumAfterKNegations };
