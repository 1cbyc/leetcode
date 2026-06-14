function check(nums: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :rtype: bool
  """
  count = 0
  for (i in Array.from({length: (nums}, (_, i) => i).length)) {
      if (nums[i] > nums[(i+1)%(nums).length]) {
          count += 1
          if (count > 1) {
              return false;
  return true;
}

export { check };
