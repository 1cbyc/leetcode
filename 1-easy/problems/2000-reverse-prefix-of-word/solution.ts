function reversePrefix(word: any, ch: any): boolean | number | string | any {
  """
  :type word: str
  :type ch: str
  :rtype: str
  """
  i = word.find(ch)
  return word[:i+1][::-1]+word[i+1:];
}

export { reversePrefix };
