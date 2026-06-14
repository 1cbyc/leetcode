function countKDifference(nums: any, k: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :type k: int
  :rtype: int
  """
  lookup = collections.defaultdict(int)
  result = 0
  for (x in nums) {
      if (x-k in lookup) {
          result += lookup[x-k]
      if (x+k in lookup) {
          result += lookup[x+k]
      lookup[x] += 1            
  return result;
}

export { countKDifference };
