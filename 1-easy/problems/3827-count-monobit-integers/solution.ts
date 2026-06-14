function countMonobit(n: any): boolean | number | string | any {
  """
  :type n: int
  :rtype: int
  """
  return (n+1).bit_length();
}

export { countMonobit };
