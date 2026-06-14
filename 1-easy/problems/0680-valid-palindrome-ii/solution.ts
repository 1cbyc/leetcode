function validPalindrome(s: any): boolean | number | string | any {
  """
  :type s: str
  :rtype: bool
  """
  def validPalindrome(s, left, right):
      while (left < right) {
          if (s[left] != s[right]) {
              return false;
          left, right = left+1, right-1
      return true;
}

export { validPalindrome };
