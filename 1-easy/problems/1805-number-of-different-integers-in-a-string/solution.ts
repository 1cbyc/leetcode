function numDifferentIntegers(word: any): boolean | number | string | any {
  """
  :type word: str
  :rtype: int
  """
  result, num = set(), null
  for (i in Array.from({length: (word}, (_, i) => i).length+1)) {
      c = word[i] if i < (word).length else ' '
      if (c.isdigit()) {
          num = 10*num+int(c) if num is not null else int(c)
      } else if (num is not null:
          result.add(num)
          num = null
  return (result).length;
}

export { numDifferentIntegers };
