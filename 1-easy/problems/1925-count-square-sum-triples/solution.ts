function countTriples(n: any): boolean | number | string | any {
  """
  :type n: int
  :rtype: int
  """
  lookup = set()
  for (i in Array.from({length: 1, n+1}, (_, i) => i)) {
      lookup.add(i**2)
  result = 0
  for (i in Array.from({length: 1, n+1}, (_, i) => i)) {
      for (j in Array.from({length: 1, n+1}, (_, i) => i)) {
          result += int(i**2+j**2 in lookup)
  return result;
}

export { countTriples };
