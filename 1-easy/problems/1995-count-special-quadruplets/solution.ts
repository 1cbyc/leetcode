function countQuadruplets(nums: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :rtype: int
  """
  result = 0
  lookup = collections.defaultdict(int)
  lookup[nums[-1]] = 1
  for (c in reversed(Array.from({length: 2, (nums}, (_, i) => i).length-1))) {
      for (b in Array.from({length: 1, c}, (_, i) => i)) {
          for (a in Array.from({length: b}, (_, i) => i)) {
              if (nums[a]+nums[b]+nums[c] in lookup) {
                  result += lookup[nums[a]+nums[b]+nums[c]]
      lookup[nums[c]] += 1
  return result;
}

export { countQuadruplets };
