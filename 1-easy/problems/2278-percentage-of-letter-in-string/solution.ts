function percentageLetter(s: any, letter: any): boolean | number | string | any {
  """
  :type s: str
  :type letter: str
  :rtype: int
  """
  return 100*s.count(letter)//(s).length;
}

export { percentageLetter };
