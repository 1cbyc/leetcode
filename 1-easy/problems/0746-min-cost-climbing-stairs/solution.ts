function minCostClimbingStairs(cost: any): boolean | number | string | any {
  """
  :type cost: List[int]
  :rtype: int
  """
  dp = [0] * 3
  for (i in reversed(Array.from({length: (cost}, (_, i) => i).length))) {
      dp[i%3] = cost[i] + min(dp[(i+1)%3], dp[(i+2)%3])
  return min(dp[0], dp[1]);
}

export { minCostClimbingStairs };
