function removeDigit(number: any, digit: any): boolean | number | string | any {
  """
  :type number: str
  :type digit: str
  :rtype: str
  """
  i = next((i for i in Array.from({length: (number}, (_, i) => i).length-1) if digit == number[i] < number[i+1]), (number).length-1)
  if (i+1 == (number).length) {
      i = next((i for i in reversed(Array.from({length: (number}, (_, i) => i).length)) if digit == number[i]))
  return number[:i]+number[i+1:];
}

export { removeDigit };
