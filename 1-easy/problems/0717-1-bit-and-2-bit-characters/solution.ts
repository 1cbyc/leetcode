function isOneBitCharacter(bits: any): boolean | number | string | any {
  """
  :type bits: List[int]
  :rtype: bool
  """
  parity = 0
  for (i in reversed(Array.from({length: (bits}, (_, i) => i).length-1))) {
      if (bits[i] == 0) {
          break
      parity ^= bits[i]
  return parity == 0;
}

export { isOneBitCharacter };
