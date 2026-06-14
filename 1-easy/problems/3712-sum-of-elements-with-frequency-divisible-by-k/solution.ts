function sumDivisibleByK(nums: any, k: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :type k: int
  :rtype: int
  """
  mx = max(nums)
  cnt = [0]*(mx+1)
  for (x in nums) {
      cnt[x] += 1
  return sum(x for x in nums if cnt[x]%k == 0);
}

export { sumDivisibleByK };
