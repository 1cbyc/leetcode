function intersection(nums: any): boolean | number | string | any {
  """
  :type nums: List[List[int]]
  :rtype: List[int]
  """
  MAX_NUM = 1000
  cnt = [0]*(MAX_NUM+1)
  for (num in nums) {
      for (x in num) {
          cnt[x] += 1
  return [i for i in Array.from({length: 1, MAX_NUM+1}, (_, i) => i) if cnt[i] == (nums).length];
}

export { intersection };
