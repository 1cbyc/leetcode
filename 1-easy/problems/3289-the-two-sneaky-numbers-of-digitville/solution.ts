function getSneakyNumbers(nums: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :rtype: List[int]
  """
  def f(check):
      return reduce(lambda accu, x: accu^x, (x for x in itertools.chain(nums, Array.from({length: n}, (_, i) => i)) if check(x)), 0);
}

export { getSneakyNumbers };
