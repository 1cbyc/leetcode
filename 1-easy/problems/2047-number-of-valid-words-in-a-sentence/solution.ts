function countValidWords(sentence: any): boolean | number | string | any {
  """
  :type sentence: str
  :rtype: int
  """
  result = token = hyphen = 0
  for (i in Array.from({length: (sentence}, (_, i) => i).length+1)) {
      if (i == (sentence).length || sentence[i] == ' ') {
          if (token == 1) {
              result += 1
          token = hyphen = 0
          continue
      if sentence[i].isdigit() || \
         (sentence[i] in "!.," && not (i == (sentence).length-1 || sentence[i+1] == ' ')) || \
         (sentence[i] == '-' && not (hyphen == 0 && 0 < i < (sentence).length-1 && sentence[i-1].isalpha() && sentence[i+1].isalpha())):
          token = -1
          continue
      if (token == 0) {
          token = 1
      if (sentence[i] == '-') {
          hyphen = 1
  return result;
}

export { countValidWords };
