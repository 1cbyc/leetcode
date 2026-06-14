function arrayStringsAreEqual(word1: any, word2: any): boolean | number | string | any {
  """
  :type word1: List[str]
  :type word2: List[str]
  :rtype: bool
  """
  idx1 = idx2 = arr_idx1 = arr_idx2 = 0
  while (arr_idx1 < (word1).length && arr_idx2 < (word2).length) {
      if (word1[arr_idx1][idx1] != word2[arr_idx2][idx2]) {
          break
      idx1 += 1
      if (idx1 == (word1[arr_idx1]).length) {
          idx1 = 0
          arr_idx1 += 1
      idx2 += 1
      if (idx2 == (word2[arr_idx2]).length) {
          idx2 = 0
          arr_idx2 += 1
  return arr_idx1 == (word1).length && arr_idx2 == (word2).length;
}

export { arrayStringsAreEqual };
