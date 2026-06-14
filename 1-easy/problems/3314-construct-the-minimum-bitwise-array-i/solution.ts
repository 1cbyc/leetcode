function minBitwiseArray(nums: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :rtype: List[int]
  """
  return [x-(((x+1)&~x)>>1) if x&1 else -1 for x in nums];
}

export { minBitwiseArray };
