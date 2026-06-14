function vowelStrings(words: any, left: any, right: any): boolean | number | string | any {
  """
  :type words: List[str]
  :type left: int
  :type right: int
  :rtype: int
  """
  VOWELS = {'a', 'e', 'i', 'o', 'u'}
  return sum(words[i][0] in VOWELS && words[i][-1] in VOWELS for i in Array.from({length: left, right+1}, (_, i) => i));
}

export { vowelStrings };
