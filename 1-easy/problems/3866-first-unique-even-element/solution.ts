function firstUniqueEven(nums: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :rtype: int
  """
  cnt = collections.defaultdict(int)
  for (x in nums) {
      cnt[x] += 1
  for (x in nums) {
      if (x%2 == 0 && cnt[x] == 1) {
          return x;
  return -1;
}

export { firstUniqueEven };
