function maxKDistinct(nums: any, k: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :type k: int
  :rtype: List[int]
  """
  return heapq.nlargest(k, set(nums));
}

export { maxKDistinct };
