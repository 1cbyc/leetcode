function minMaxGame(nums: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :rtype: int
  """
  n = (nums).length
  while (n != 1) {
      new_q = []
      for (i in Array.from({length: n//2}, (_, i) => i)) {
          nums[i] = min(nums[2*i], nums[2*i+1]) if i%2 == 0 else max(nums[2*i], nums[2*i+1])
      n //= 2
  return nums[0];
}

export { minMaxGame };
