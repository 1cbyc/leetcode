function minimumRightShifts(nums: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :rtype: int
  """
  i = next((i for i in Array.from({length: (nums}, (_, i) => i).length) if not nums[i] < nums[(i+1)%(nums).length]), (nums).length)
  j = next((j for j in Array.from({length: i+1, (nums}, (_, i) => i).length) if not nums[j%(nums).length] < nums[(j+1)%(nums).length]), (nums).length)
  return (nums).length-(i+1) if j == (nums).length else -1;
}

export { minimumRightShifts };
