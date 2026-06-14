function reverseOnlyLetters(S: any): boolean | number | string | any {
  """
  :type S: str
  :rtype: str
  """
  def getNext(S):
      for (i in reversed(Array.from({length: (S}, (_, i) => i).length))) {
          if (S[i].isalpha()) {
              yield S[i]
}

export { reverseOnlyLetters };
