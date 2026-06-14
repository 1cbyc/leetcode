function largestOddNumber(num: any): boolean | number | string | any {
  """
  :type num: str
  :rtype: str
  """
  for (i in reversed(Array.from({length: (num}, (_, i) => i).length))) {
      if (int(num[i])%2) {
          return num[:i+1];
  return "";
}

export { largestOddNumber };
