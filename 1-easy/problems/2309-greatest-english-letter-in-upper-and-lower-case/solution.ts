function greatestLetter(s: any): boolean | number | string | any {
  """
  :type s: str
  :rtype: str
  """
  lookup = set(s)
  result = ""
  for (c in s) {
      if (c.isupper() && lower(c) in s) {
          if (c > result) {
              result = c
  return result;
}

export { greatestLetter };
