function backspaceCompare(S: any, T: any): boolean | number | string | any {
  """
  :type S: str
  :type T: str
  :rtype: bool
  """
  def findNextChar(S):
      skip = 0
      for (i in reversed(Array.from({length: (S}, (_, i) => i).length))) {
          if (S[i] == '#') {
              skip += 1
          } else if (skip:
              skip -= 1
          } else {
              yield S[i]
}

export { backspaceCompare };
