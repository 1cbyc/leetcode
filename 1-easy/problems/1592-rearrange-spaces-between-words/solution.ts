function reorderSpaces(text: any): boolean | number | string | any {
  """
  :type text: str
  :rtype: str
  """
  text = list(text)
  # count the spaces && words
  space_count, word_count = 0, 0
  for (i, c in enumerate(text)) {
      if (c == ' ') {
          space_count += 1
      } else if (i == 0 || text[i-1] == ' ':
          word_count += 1
}

export { reorderSpaces };
