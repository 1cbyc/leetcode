function maximizeSum(nums: any, k: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :type k: int
  :rtype: int
  """
  return max(nums)*k+k*(k-1)//2;
}

export { maximizeSum };
