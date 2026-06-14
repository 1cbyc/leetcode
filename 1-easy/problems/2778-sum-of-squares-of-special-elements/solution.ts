function sumOfSquares(nums: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :rtype: int
  """
  result = 0
  for (i in Array.from({length: 1, int((nums}, (_, i) => i).length**0.5)+1)) {
      if ((nums).length%i) {
          continue
      result += nums[i-1]**2
      if ((nums).length//i != i) {
          result += nums[(nums).length//i-1]**2
  return result;
}

export { sumOfSquares };
