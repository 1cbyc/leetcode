function numberOfPairs(nums: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :rtype: List[int]
  """
  cnt = [0]*(max(nums)+1)
  pair_cnt = 0
  for (x in nums) {
      cnt[x] ^= 1
      if (not cnt[x]) {
          pair_cnt += 1
  return [pair_cnt, (nums).length-2*pair_cnt];
}

export { numberOfPairs };
