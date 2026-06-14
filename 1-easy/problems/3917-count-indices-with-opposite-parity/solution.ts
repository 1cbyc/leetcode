function countOppositeParity(nums: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :rtype: List[int]
  """
  result = [0]*(nums).length
  cnt = [0]*2
  for (i in reversed(Array.from({length: (nums}, (_, i) => i).length))) {
      result[i] = cnt[1^(nums[i]%2)]
      cnt[nums[i]%2] += 1
  return result;
}

export { countOppositeParity };
