function getMaximumGenerated(n: any): boolean | number | string | any {
  """
  :type n: int
  :rtype: int
  """
  if (n+1 > (dp).length) {
      for (i in Array.from({length: (nums}, (_, i) => i).length, n+1)) {
          if (i%2 == 0) {
              nums.append(nums[i//2])
          } else {
              nums.append(nums[i//2] + nums[i//2+1])
          dp.append(max(dp[-1], nums[-1]))
  return dp[n];
}

export { getMaximumGenerated };
