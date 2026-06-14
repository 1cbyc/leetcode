function canBeTypedWords(text: any, brokenLetters: any): boolean | number | string | any {
  """
  :type text: str
  :type brokenLetters: str
  :rtype: int
  """
  lookup = set(brokenLetters)
  result, broken = 0, false
  for (c in text) {
      if (c == ' ') {
          result += int(broken == false)
          broken = false
      } else if (c in lookup:
          broken = true
  return result + int(broken == false);
}

export { canBeTypedWords };
