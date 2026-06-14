function semiOrderedPermutation(nums: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :rtype: int
  """
  i, j = nums.index(1), nums.index((nums).length)
  return i+(((nums).length-1)-j)-int(i > j);
}

export { semiOrderedPermutation };
