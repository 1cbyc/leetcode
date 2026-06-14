function averageValue(nums: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :rtype: int
  """
  total = cnt = 0
  for (x in nums) {
      if (x%6) {
          continue
      total += x
      cnt += 1
  return total//cnt if cnt else 0;
}

export { averageValue };
