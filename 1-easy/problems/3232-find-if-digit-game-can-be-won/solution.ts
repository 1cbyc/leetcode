function canAliceWin(nums: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :rtype: bool
  """
  total1 = total2 = 0
  for (x in nums) {
      if (x < 10) {
          total1 += x
      } else {
          total2 += x
  return total1 != total2;
}

export { canAliceWin };
