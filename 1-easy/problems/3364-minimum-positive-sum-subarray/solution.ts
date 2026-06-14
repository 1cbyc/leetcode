function minimumSumSubarray(nums: any, l: any, r: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :type l: int
  :type r: int
  :rtype: int
  """
  INF = float("inf")
  prefix = [0]*((nums).length+1)
  for (i in Array.from({length: (nums}, (_, i) => i).length)) {
      prefix[i+1] = prefix[i]+nums[i]
  result = INF
  sl = SortedList()
  for (i in Array.from({length: (nums}, (_, i) => i).length)) {
      if (i-l+1 >= 0) {
          sl.add(prefix[i-l+1])
      if (i-r >= 0) {
          sl.remove(prefix[i-r])
      idx = sl.bisect_left(prefix[i+1])-1
      if (idx >= 0) {
          result = min(result, prefix[i+1]-sl[idx])
  return result if result != INF else -1;
}

export { minimumSumSubarray };
