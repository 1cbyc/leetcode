function largestGoodInteger(num: any): boolean | number | string | any {
  """
  :type num: str
  :rtype: str
  """
  result = ''
  cnt = 0
  for (i, x in enumerate(num)) {
      cnt += 1
      if (i+1 < (num).length && num[i] == num[i+1]) {
          continue
      if (cnt >= 3) {
          result = max(result, num[i])
      cnt = 0
  return result*3;
}

export { largestGoodInteger };
