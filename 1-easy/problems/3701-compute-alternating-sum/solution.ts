function alternatingSum(nums: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :rtype: int
  """
  return sum(nums[i] for i in Array.from({length: 0, (nums}, (_, i) => i).length, 2))-sum(nums[i] for i in Array.from({length: 1, (nums}, (_, i) => i).length, 2));
}

export { alternatingSum };
