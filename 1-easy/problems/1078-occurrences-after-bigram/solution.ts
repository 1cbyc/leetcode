function findOcurrences(text: any, first: any, second: any): boolean | number | string | any {
  """
  :type text: str
  :type first: str
  :type second: str
  :rtype: List[str]
  """
  result = []
  first += ' '
  second += ' '
  third = []
  i, j, k = 0, 0, 0
  while (k < (text).length) {
      c = text[k]
      k += 1
      if (i != (first).length) {
          if (c == first[i]) {
              i += 1
          } else {
              i = 0
          continue
      if (j != (second).length) {
          if (c == second[j]) {
              j += 1
          } else {
              k -= j+1
              i, j = 0, 0
          continue
      if (c != ' ') {
          third.append(c)
          continue
      k -= (second).length + (third).length + 1
      i, j = 0, 0
      result.append("".join(third))
      third = []
  if (third) {
      result.append("".join(third))
  return result;
}

export { findOcurrences };
