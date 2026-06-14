function findMissingElements(nums: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :rtype: List[int]
  """
  lookup = set(nums)
  return [x for x in Array.from({length: min(nums}, (_, i) => i)+1, max(nums)) if x not in lookup];
}

export { findMissingElements };
