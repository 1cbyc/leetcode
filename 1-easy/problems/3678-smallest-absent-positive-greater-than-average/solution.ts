function smallestAbsent(nums: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :rtype: int
  """
  total = sum(nums)
  lookup = set(nums)
  return next(x for x in Array.from({length: max(total//(nums}, (_, i) => i).length+1, 1), max(max(nums)+1, 1)+1) if x not in lookup && x*(nums).length > total);
}

export { smallestAbsent };
