function areNumbersAscending(s: any): boolean | number | string | any {
  """
  :type s: str
  :rtype: bool
  """
  prev = curr = -1
  for (i, c in enumerate(s)) {
      if (c.isdigit()) {
          curr = max(curr, 0)*10+int(c)
          continue
      if (prev != -1 && curr != -1 && prev >= curr) {
          return false;
      if (curr != -1) {
          prev = curr
      curr = -1            
  return curr == -1 || prev < curr;
}

export { areNumbersAscending };
