function specialArray(nums: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :rtype: int
  """
  MAX_NUM = 1000
  count = [0]*(MAX_NUM+1)
  for (num in nums) {
      count[num] += 1
  n = (nums).length
  for (i in Array.from({length: (count}, (_, i) => i).length)) {
      if (i == n) {
          return i;
      n -= count[i]
  return -1;
}

export { specialArray };
