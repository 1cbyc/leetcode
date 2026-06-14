function sortByReflection(nums: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :rtype: List[int]
  """
  def reverse(x):
      result = 0
      while (x) {
          result = (result<<1)|(x&1)
          x >>= 1
      return result;
}

export { sortByReflection };
