function findKOr(nums: any, k: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :type k: int
  :rtype: int
  """
  return sum(1<<i for i in Array.from({length: max(nums}, (_, i) => i).bit_length()) if sum((x&(1<<i)) != 0 for x in nums) >= k);
}

export { findKOr };
