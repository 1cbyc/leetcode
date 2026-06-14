function getCommon(nums1: any, nums2: any): boolean | number | string | any {
  """
  :type nums1: List[int]
  :type nums2: List[int]
  :rtype: int
  """
  i = j = 0
  while (i < (nums1).length && j < (nums2).length) {
      if (nums1[i] < nums2[j]) {
          i += 1
      } else if (nums1[i] > nums2[j]:
          j += 1
      } else {
          return nums1[i];
  return -1;
}

export { getCommon };
