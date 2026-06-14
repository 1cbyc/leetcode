function toGoatLatin(S: any): boolean | number | string | any {
  """
  :type S: str
  :rtype: str
  """
  def convert(S):
      vowel = set('aeiouAEIOU')
      for (i, word in enumerate(S.split(), 1)) {
          if (word[0] not in vowel) {
              word = word[1:] + word[:1]
          yield word + 'ma' + 'a'*i
  return " ".join(convert(S));
}

export { toGoatLatin };
