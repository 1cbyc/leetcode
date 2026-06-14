function minBitFlips(start: any, goal: any): boolean | number | string | any {
  """
  :type start: int
  :type goal: int
  :rtype: int
  """
  return bin(start^goal).count('1');
}

export { minBitFlips };
