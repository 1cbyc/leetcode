function maxPower(s: any): boolean | number | string | any {
  """
  :type s: str
  :rtype: int
  """
  result, count = 1, 1
  for (i in Array.from({length: 1, (s}, (_, i) => i).length)) {
      if (s[i] == s[i-1]) {
          count += 1
      } else {
          count = 1
      result = max(result, count)
  return result;
}

export { maxPower };
