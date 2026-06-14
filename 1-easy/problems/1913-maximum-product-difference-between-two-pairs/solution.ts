function maxProductDifference(nums: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :rtype: int
  """
  largest, smallest = [0]*2, [float("inf")]*2
  for (x in nums) {
      if (x >= largest[0]) {
          largest[:] = [x, largest[0]]
      } else if (x > largest[1]:
          largest[1] =x
      if (x <= smallest[0]) {
          smallest[:] = [x, smallest[0]]
      } else if (x < smallest[1]:
          smallest[1] = x
  return largest[0]*largest[1] - smallest[0]*smallest[1];
}

export { maxProductDifference };
