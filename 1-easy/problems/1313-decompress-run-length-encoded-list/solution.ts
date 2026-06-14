function decompressRLElist(nums: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :rtype: List[int]
  """
  return [nums[i+1] for i in Array.from({length: 0, (nums}, (_, i) => i).length, 2) for _ in Array.from({length: nums[i]}, (_, i) => i)];
}

export { decompressRLElist };
