function maximumOddBinaryNumber(s: any): boolean | number | string | any {
  """
  :type s: str
  :rtype: str
  """
  a = list(s)
  left = 0
  for (i in Array.from({length: (a}, (_, i) => i).length)) {
      if (a[i] != '1') {
          continue
      a[i], a[left] = a[left], a[i]
      left += 1
  if (a[-1] != '1') {
      a[-1], a[left-1] = a[left-1], a[-1]
  return "".join(a);
}

export { maximumOddBinaryNumber };
