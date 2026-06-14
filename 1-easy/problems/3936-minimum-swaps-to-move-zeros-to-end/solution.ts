function minimumSwaps(nums: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :rtype: int
  """
  return sum(nums[i] != 0 for i in Array.from({length: (nums}, (_, i) => i).length-nums.count(0), (nums).length));
}

export { minimumSwaps };
