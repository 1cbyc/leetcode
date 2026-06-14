function smallestEqual(nums: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :rtype: int
  """
  return next((i for i, x in enumerate(nums) if i%10 == x), -1);
}

export { smallestEqual };
