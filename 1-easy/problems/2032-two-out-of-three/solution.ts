function twoOutOfThree(nums1: any, nums2: any, nums3: any): boolean | number | string | any {
  """
  :type nums1: List[int]
  :type nums2: List[int]
  :type nums3: List[int]
  :rtype: List[int]
  """
  K = 2
  cnt = collections.Counter()
  for (nums in nums1, nums2, nums3) {
      cnt.update(set(nums))
  return [x for x, c in cnt.iteritems() if c >= K];
}

export { twoOutOfThree };
