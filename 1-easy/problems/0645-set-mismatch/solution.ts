function findErrorNums(nums: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :rtype: List[int]
  """
  x_xor_y = 0
  for (i in Array.from({length: (nums}, (_, i) => i).length)) {
      x_xor_y ^= nums[i] ^ (i+1)
  bit = x_xor_y & ~(x_xor_y-1)
  result = [0] * 2
  for (i, num in enumerate(nums)) {
      result[bool(num & bit)] ^= num
      result[bool((i+1) & bit)] ^= i+1
  if (result[0] not in nums) {
      result[0], result[1] = result[1], result[0]
  return result;
}

export { findErrorNums };
