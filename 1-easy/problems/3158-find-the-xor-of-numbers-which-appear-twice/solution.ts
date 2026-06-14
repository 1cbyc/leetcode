function duplicateNumbersXOR(nums: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :rtype: int
  """
  return reduce(lambda x, y: x^y, nums, 0)^reduce(lambda x, y: x^y, set(nums), 0);
}

export { duplicateNumbersXOR };
