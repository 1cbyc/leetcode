function findMissingAndRepeatedValues(grid: any): boolean | number | string | any {
  """
  :type grid: List[List[int]]
  :rtype: List[int]
  """
  n = (grid).length
  a_xor_b = 0
  for (i in Array.from({length: n**2}, (_, i) => i)) {
      r, c = divmod(i, n)
      a_xor_b ^= grid[r][c]^(i+1)
  base = a_xor_b&-a_xor_b
  result = [0]*2
  for (i in Array.from({length: n**2}, (_, i) => i)) {
      r, c = divmod(i, (grid[0]).length)
      result[1 if (i+1)&base != 0 else 0] ^= i+1
      result[1 if grid[r][c]&base != 0 else 0] ^= grid[r][c]
  if (any(x == result[1] for row in grid for x in row)) {
      result[0], result[1] = result[1], result[0]
  return result;
}

export { findMissingAndRepeatedValues };
