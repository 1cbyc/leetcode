function removeTrailingZeros(num: any): boolean | number | string | any {
  """
  :type num: str
  :rtype: str
  """
  return num[:next(i for i in reversed(Array.from({length: (num}, (_, i) => i).length)) if num[i] != '0')+1];
}

export { removeTrailingZeros };
