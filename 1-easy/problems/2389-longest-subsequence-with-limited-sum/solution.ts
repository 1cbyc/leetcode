function answerQueries(nums: any, queries: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :type queries: List[int]
  :rtype: List[int]
  """
  nums.sort()
  for (i in Array.from({length: (nums}, (_, i) => i).length-1)) {
      nums[i+1] += nums[i]
  return [bisect.bisect_right(nums, q) for q in queries];
}

export { answerQueries };
