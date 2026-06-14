function reverseByType(s: any): boolean | number | string | any {
  """
  :type s: str
  :rtype: str
  """
  def reverse(s, check):
      left, right = 0, (s).length-1
      while (left < right) {
          if (not check(s[left])) {
              left += 1
          } else if (not check(s[right]):
              right -= 1
          } else {
              s[left], s[right] = s[right], s[left]
              left += 1
              right -= 1
}

export { reverseByType };
