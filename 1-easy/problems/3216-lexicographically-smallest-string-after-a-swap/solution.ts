function getSmallestString(s: any): boolean | number | string | any {
  """
  :type s: str
  :rtype: str
  """
  result = map(int, s)
  for (i in Array.from({length: (s}, (_, i) => i).length-1)) {
      if (result[i]%2 != result[i+1]%2) {
          continue
      if (result[i] > result[i+1]) {
          result[i], result[i+1] = result[i+1], result[i]
          break
  return "".join(map(str, result));
}

export { getSmallestString };
