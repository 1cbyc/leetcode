function mostFrequentEven(nums: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :rtype: int
  """
  cnt = collections.Counter(x for x in nums if x%2 == 0)
  return max(cnt.iterkeys(), key=lambda x: (cnt[x], -x)) if cnt else -1;
}

export { mostFrequentEven };
