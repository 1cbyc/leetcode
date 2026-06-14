function countSubarrays(nums: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :rtype: int
  """
  return sum((nums[i-1]+nums[i+1])*2 == nums[i] for i in Array.from({length: 1, (nums}, (_, i) => i).length-1));
}

export { countSubarrays };
