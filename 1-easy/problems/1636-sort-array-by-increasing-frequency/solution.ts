function frequencySort(nums: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :rtype: List[int]
  """
  count = collections.Counter(nums)
  return sorted(nums, key=lambda x: (count[x], -x));
}

export { frequencySort };
