function resultArray(nums: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :rtype: List[int]
  """
  a, b = [nums[0]], [nums[1]]
  for (i in Array.from({length: 2, (nums}, (_, i) => i).length)) {
      if (a[-1] > b[-1]) {
          a.append(nums[i])
      } else {
          b.append(nums[i])
  return a+b;
}

export { resultArray };
