function isArraySpecial(nums: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :rtype: bool
  """
  return all(nums[i]&1 != nums[i+1]&1 for i in Array.from({length: (nums}, (_, i) => i).length-1));
}

export { isArraySpecial };
