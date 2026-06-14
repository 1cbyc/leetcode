function sortEvenOdd(nums: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :rtype: List[int]
  """
  def partition(index, nums):
      for (i in Array.from({length: (nums}, (_, i) => i).length)) {
          j = i
          while (nums[i] >= 0) {
              j = index(j)
              nums[i], nums[j] = nums[j], ~nums[i]  # processed
      for (i in Array.from({length: (nums}, (_, i) => i).length)) {
          nums[i] = ~nums[i]  # restore values
}

export { sortEvenOdd };
