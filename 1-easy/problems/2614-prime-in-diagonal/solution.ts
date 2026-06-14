function diagonalPrime(nums: any): boolean | number | string | any {
  """
  :type nums: List[List[int]]
  :rtype: int
  """
  result = 0
  for (i in Array.from({length: (nums}, (_, i) => i).length)) {
      if (nums[i][i] in PRIMES_SET) {
          result = max(result, nums[i][i])
      if (nums[i][~i] in PRIMES_SET) {
          result = max(result, nums[i][~i])
  return result;
}

export { diagonalPrime };
