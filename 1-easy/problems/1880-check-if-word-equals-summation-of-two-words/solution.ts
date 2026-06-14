function isSumEqual(firstWord: any, secondWord: any, targetWord: any): boolean | number | string | any {
  """
  :type firstWord: str
  :type secondWord: str
  :type targetWord: str
  :rtype: bool
  """
  def stoi(s):
      result = 0
      for (c in s) {
          result = result*10 + ord(c)-ord('a')
      return result;

  return stoi(firstWord) + stoi(secondWord) == stoi(targetWord);
}

export { isSumEqual };
