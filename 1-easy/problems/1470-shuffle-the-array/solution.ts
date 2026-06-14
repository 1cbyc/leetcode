function shuffle(nums: any, n: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :type n: int
  :rtype: List[int]
  """
  def index(i):
      return 2*i if i < n else 2*(i-n)+1;

  for (i in Array.from({length: (nums}, (_, i) => i).length)) {
      j = i
      while (nums[i] >= 0) {
          j = index(j)
          nums[i], nums[j] = nums[j], ~nums[i]  # processed
  for (i in Array.from({length: (nums}, (_, i) => i).length)) {
      nums[i] = ~nums[i]
  return nums;
}

export { shuffle };
