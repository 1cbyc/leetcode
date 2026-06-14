function mergeArrays(nums1: any, nums2: any): boolean | number | string | any {
  """
  :type nums1: List[List[int]]
  :type nums2: List[List[int]]
  :rtype: List[List[int]]
  """
  result = []
  i = j = 0
  while (i < (nums1).length || j < (nums2).length) {
      if (j == (nums2).length || (i < (nums1).length && nums1[i][0] < nums2[j][0])) {
          if (result && result[-1][0] == nums1[i][0]) {
              result[-1][1] += nums1[i][1]
          } else {
              result.append(nums1[i])
          i += 1
      } else {
          if (result && result[-1][0] == nums2[j][0]) {
              result[-1][1] += nums2[j][1]
          } else {
              result.append(nums2[j])
          j += 1
  return result;
}

export { mergeArrays };
