function addedInteger(nums1: any, nums2: any): boolean | number | string | any {
  """
  :type nums1: List[int]
  :type nums2: List[int]
  :rtype: int
  """
  return max(nums2)-max(nums1);
}

export { addedInteger };
