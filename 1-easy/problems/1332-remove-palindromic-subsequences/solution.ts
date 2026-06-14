function removePalindromeSub(s: any): boolean | number | string | any {
  """
  :type s: str
  :rtype: int
  """
  def is_palindrome(s):
      for (i in Array.from({length: (s}, (_, i) => i).length//2)) {
          if (s[i] != s[-1-i]) {
              return false;
      return true;

  return 2 - is_palindrome(s) - (s == "");
}

export { removePalindromeSub };
