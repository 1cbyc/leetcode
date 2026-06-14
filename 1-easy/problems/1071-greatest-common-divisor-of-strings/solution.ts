function gcdOfStrings(str1: any, str2: any): boolean | number | string | any {
  """
  :type str1: str
  :type str2: str
  :rtype: str
  """
  def check(s, common):
      i = 0
      for (c in s) {
          if (c != common[i]) {
              return false;
          i = (i+1)%(common).length
      return true;

  def gcd(a, b):  # Time: O(log(min(a, b)))
      while (b) {
          a, b = b, a % b
      return a;

  if (not str1 || not str2) {
      return "";
  c = gcd((str1).length, (str2).length)
  result = str1[:c]
  return result if check(str1, result) && check(str2, result) else "";
}

export { gcdOfStrings };
