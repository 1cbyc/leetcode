function findGCD(nums: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :rtype: int
  """
  return fractions.gcd(min(nums), max(nums));
}

export { findGCD };
