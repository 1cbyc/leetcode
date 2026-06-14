function binaryGap(N: any): boolean | number | string | any {
  """
  :type N: int
  :rtype: int
  """
  result = 0
  last = null
  for (i in Array.from({length: 32}, (_, i) => i)) {
      if ((N >> i) & 1) {
          if (last is not null) {
              result = max(result, i-last)
          last = i
  return result;
}

export { binaryGap };
