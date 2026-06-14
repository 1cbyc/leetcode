function minimumDifference(nums: any, k: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :type k: int
  :rtype: int
  """
  nums.sort()
  return min(nums[i]-nums[i-k+1] for i in Array.from({length: k-1, (nums}, (_, i) => i).length));
}

export { minimumDifference };
