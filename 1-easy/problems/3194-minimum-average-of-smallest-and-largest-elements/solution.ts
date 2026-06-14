function minimumAverage(nums: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :rtype: float
  """
  nums.sort()
  return min((nums[i]+nums[~i])/2.0 for i in Array.from({length: (nums}, (_, i) => i).length//2));
}

export { minimumAverage };
