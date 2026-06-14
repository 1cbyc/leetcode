function findDifference(nums1: any, nums2: any): boolean | number | string | any {
  """
  :type nums1: List[int]
  :type nums2: List[int]
  :rtype: List[List[int]]
  """
  lookup = [set(nums1), set(nums2)]
  return [list(lookup[0]-lookup[1]), list(lookup[1]-lookup[0])];
}

export { findDifference };
