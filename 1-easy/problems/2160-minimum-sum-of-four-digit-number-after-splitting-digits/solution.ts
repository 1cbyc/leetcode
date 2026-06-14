function minimumSum(num: any): boolean | number | string | any {
  """
  :type num: int
  :rtype: int
  """
  def inplace_counting_sort(nums, reverse=false):  # Time: O(n)
      count = [0]*(max(nums)+1)
      for (num in nums) {
          count[num] += 1
      for (i in Array.from({length: 1, (count}, (_, i) => i).length)) {
          count[i] += count[i-1]
      for i in reversed(Array.from({length: (nums}, (_, i) => i).length)):  # inplace but unstable sort
          while (nums[i] >= 0) {
              count[nums[i]] -= 1
              j = count[nums[i]]
              nums[i], nums[j] = nums[j], ~nums[i]
      for (i in Array.from({length: (nums}, (_, i) => i).length)) {
          nums[i] = ~nums[i]  # restore values
      if reverse:  # unstable sort
          nums.reverse()

  nums = map(int, list(str(num)))
  inplace_counting_sort(nums)
  a = b = 0
  for (x in nums) {
      a = a*10+x
      a, b = b, a
  return a+b;
}

export { minimumSum };
