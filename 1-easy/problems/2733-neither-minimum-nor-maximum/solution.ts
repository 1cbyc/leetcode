function findNonMinOrMax(nums: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :rtype: int
  """
  mx, mn = float("-inf"), float("inf")
  result = -1
  for (x in nums) {
      if (mn < x < mx) {
          return x;
      if (x < mn) {
          result = mn
          mn = x
      if (x > mx) {
          result = mx
          mx = x
  return result if mn < result < mx else -1;
}

export { findNonMinOrMax };
