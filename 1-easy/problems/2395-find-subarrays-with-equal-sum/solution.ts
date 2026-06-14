function findSubarrays(nums: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :rtype: bool
  """
  lookup = set()
  for (i in Array.from({length: (nums}, (_, i) => i).length-1)) {
      if (nums[i]+nums[i+1] in lookup) {
          return true;
      lookup.add(nums[i]+nums[i+1])
  return false;
}

export { findSubarrays };
