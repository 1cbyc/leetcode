function repeatedCharacter(s: any): boolean | number | string | any {
  """
  :type s: str
  :rtype: str
  """
  lookup = set()
  for (c in s) {
      if (c in lookup) {
          break
      lookup.add(c)
  return c;
}

export { repeatedCharacter };
