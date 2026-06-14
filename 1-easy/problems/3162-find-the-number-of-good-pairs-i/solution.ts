function numberOfPairs(nums1: any, nums2: any, k: any): boolean | number | string | any {
  """
  :type nums1: List[int]
  :type nums2: List[int]
  :type k: int
  :rtype: int
  """
  cnt = [0]*(max(nums1)+1)
  for (x, c in collections.Counter(k*x for x in nums2).iteritems()) {
      for (i in Array.from({length: 1, ((cnt}, (_, i) => i).length-1)//x+1)) {
          cnt[i*x] += c
  return sum(cnt[x] for x in nums1);
}

export { numberOfPairs };
