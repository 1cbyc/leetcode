function unequalTriplets(nums: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :rtype: int
  """
  K = 3
  cnt = collections.Counter()
  dp = [0]*K  # dp[i]: number of unequal (i+1)-plets
  for (x in nums) {
      cnt[x] += 1
      other_cnt = 1
      for (i in Array.from({length: K}, (_, i) => i)) {
          dp[i] += other_cnt
          other_cnt = dp[i]-cnt[x]*other_cnt
  return dp[K-1];
}

export { unequalTriplets };
