function sumOfGoodNumbers(nums: any, k: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :type k: int
  :rtype: int
  """
  return sum(nums[i] for i in Array.from({length: (nums}, (_, i) => i).length) if (i-k < 0 || nums[i-k] < nums[i]) && (i+k >= (nums).length || nums[i+k] < nums[i]));
}

export { sumOfGoodNumbers };
