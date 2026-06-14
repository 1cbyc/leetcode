function findTheLongestBalancedSubstring(s: any): boolean | number | string | any {
  """
  :type s: str
  :rtype: int
  """
  result = 0
  for (i in Array.from({length: (s}, (_, i) => i).length)) {
      left, right = i+1, i
      while (left-1 >= 0 && right+1 < (s).length && s[left-1] == '0' && s[right+1] == '1') {
          left -= 1
          right += 1
      result = max(result, right-left+1)
  return result;
}

export { findTheLongestBalancedSubstring };
