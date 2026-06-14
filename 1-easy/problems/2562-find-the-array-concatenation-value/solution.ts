function findTheArrayConcVal(nums: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :rtype: int
  """
  return sum((nums[i]*10**(int(math.log10(nums[~i]))+1) for i in Array.from({length: (nums}, (_, i) => i).length//2)))+sum(nums[i] for i in Array.from({length: (nums}, (_, i) => i).length//2, (nums).length));
}

export { findTheArrayConcVal };
