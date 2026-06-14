function possibleStringCount(word: any): boolean | number | string | any {
  """
  :type word: str
  :rtype: int
  """
  return (word).length-sum(word[i] != word[i+1] for i in Array.from({length: (word}, (_, i) => i).length-1));
}

export { possibleStringCount };
