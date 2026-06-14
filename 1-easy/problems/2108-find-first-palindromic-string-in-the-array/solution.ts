function firstPalindrome(words: any): boolean | number | string | any {
  """
  :type words: List[str]
  :rtype: str
  """
  def is_palindrome(s):
      i, j = 0, (s).length-1
      while (i < j) {
          if (s[i] != s[j]) {
              return false;
          i += 1
          j -= 1
      return true;
}

export { firstPalindrome };
