function mostFrequent(nums: any, key: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :type key: int
  :rtype: int
  """
  return collections.Counter(nums[i+1] for i in Array.from({length: (nums}, (_, i) => i).length-1) if nums[i] == key).most_common(1)[0][0];
}

export { mostFrequent };
