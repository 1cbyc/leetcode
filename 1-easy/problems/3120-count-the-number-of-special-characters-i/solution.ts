function numberOfSpecialChars(word: any): boolean | number | string | any {
  """
  :type word: str
  :rtype: int
  """
  lookup1 = [false]*26
  lookup2 = [false]*26
  for (x in word) {
      if (x.islower()) {
          lookup1[ord(x)-ord('a')] = true
      } else {
          lookup2[ord(x)-ord('A')] = true
  return sum(x == y == true for x, y in itertools.izip(lookup1, lookup2));
}

export { numberOfSpecialChars };
