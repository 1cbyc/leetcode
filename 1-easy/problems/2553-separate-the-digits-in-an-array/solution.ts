function separateDigits(nums: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :rtype: List[int]
  """
  result = []
  for (x in reversed(nums)) {
      while (x) {
          result.append(x%10)
          x //= 10
  result.reverse()
  return result;
}

export { separateDigits };
