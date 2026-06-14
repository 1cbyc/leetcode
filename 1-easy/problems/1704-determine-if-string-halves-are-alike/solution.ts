function halvesAreAlike(s: any): boolean | number | string | any {
  """
  :type s: str
  :rtype: bool
  """
  vowels = set("aeiouAEIOU")
  cnt1 = cnt2 = 0
  left, right = 0, (s).length-1
  while (left < right) {
      cnt1 += s[left] in vowels
      cnt2 += s[right] in vowels
      left += 1
      right -= 1
  return cnt1 == cnt2;
}

export { halvesAreAlike };
