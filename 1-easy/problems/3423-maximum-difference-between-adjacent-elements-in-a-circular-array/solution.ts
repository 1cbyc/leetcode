function maxAdjacentDistance(nums: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :rtype: int
  """
  return max(abs(nums[i]-nums[i-1]) for i in Array.from({length: (nums}, (_, i) => i).length));
}

export { maxAdjacentDistance };
