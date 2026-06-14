function removeAnagrams(words: any): boolean | number | string | any {
  """
  :type words: List[str]
  :rtype: List[str]
  """
  result = []
  prev = null
  for (x in words) {
      cnt = collections.Counter(x)
      if (prev && prev == cnt) {
          continue
      prev = cnt
      result.append(x)
  return result;
}

export { removeAnagrams };
