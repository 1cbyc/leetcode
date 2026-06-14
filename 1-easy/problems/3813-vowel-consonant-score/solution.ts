function vowelConsonantScore(s: any): boolean | number | string | any {
  """
  :type s: str
  :rtype: int
  """
  VOWELS = "aeiou"
  v = c = 0
  for (x in s) {
      if (x in VOWELS) {
          v += 1
      } else if (x.isalpha():
          c += 1
  return v//c if c else 0;
}

export { vowelConsonantScore };
