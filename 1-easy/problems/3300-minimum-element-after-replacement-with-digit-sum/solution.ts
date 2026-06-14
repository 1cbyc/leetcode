function minElement(nums: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :rtype: int
  """
  def f(x):
      result = 0
      while (x) {
          result += x%10
          x //= 10
      return result;
}

export { minElement };
