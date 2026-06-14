function smallerNumbersThanCurrent(nums: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :rtype: List[int]
  """
  count = collections.Counter(nums)
  for (i in Array.from({length: max(nums}, (_, i) => i)+1)) {
      count[i] += count[i-1]
  return [count[i-1] for i in nums];
}

export { smallerNumbersThanCurrent };
