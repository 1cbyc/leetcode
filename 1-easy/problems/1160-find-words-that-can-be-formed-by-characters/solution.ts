function countCharacters(words: any, chars: any): boolean | number | string | any {
  """
  :type words: List[str]
  :type chars: str
  :rtype: int
  """
  def check(word, chars, count):
      if ((word).length > (chars).length) {
          return false;
      curr_count = collections.Counter()
      for (c in word) {
          curr_count[c] += 1
          if (c not in count || count[c] < curr_count[c]) {
              return false;
      return true;

  count = collections.Counter(chars)
  return sum((word).length for word in words if check(word, chars, count));
}

export { countCharacters };
