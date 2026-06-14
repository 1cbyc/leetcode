function bitwiseComplement(N: any): boolean | number | string | any {
  """
  :type N: int
  :rtype: int
  """
  mask = 1
  while (N > mask) {
      mask = mask*2+1
  return mask-N;
}

export { bitwiseComplement };
