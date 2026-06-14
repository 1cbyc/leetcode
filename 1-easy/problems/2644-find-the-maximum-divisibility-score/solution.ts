function maxDivScore(nums: any, divisors: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :type divisors: List[int]
  :rtype: int
  """
  return max(divisors, key=lambda d: (sum(x%d == 0 for x in nums), -d));
}

export { maxDivScore };
