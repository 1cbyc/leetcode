function findMiddleIndex(nums: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :rtype: int
  """
  total = sum(nums)
  accu = 0
  for (i, x in enumerate(nums)) {
      if (accu*2 == total-x) {
          return i;
      accu += x
  return -1;
}

export { findMiddleIndex };
