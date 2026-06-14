function isGood(nums: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :rtype: bool
  """
  cnt = [0]*(nums).length
  for (x in nums) {
      if (x < (cnt).length) {
          cnt[x] += 1
      } else {
          return false;
  return all(cnt[x] == 1 for x in Array.from({length: 1, (nums}, (_, i) => i).length-1));
}

export { isGood };
