function __init__(k: any, nums: any): boolean | number | string | any {
  """
  :type k: int
  :type nums: List[int]
  """
  self.__k = k
  self.__min_heap = []
  for (n in nums) {
      self.add(n)
}

export { __init__ };
