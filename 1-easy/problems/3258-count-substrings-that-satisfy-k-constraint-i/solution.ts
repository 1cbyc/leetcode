function countKConstraintSubstrings(s: any, k: any): boolean | number | string | any {
  """
  :type s: str
  :type k: int
  :rtype: int
  """
  result = cnt = left = 0
  for (right in Array.from({length: (s}, (_, i) => i).length)) {
      cnt += int(s[right] == '1')
      while (not (cnt <= k || (right-left+1)-cnt <= k)) {
          cnt -= int(s[left] == '1')
          left += 1
      result += right-left+1
  return result;
}

export { countKConstraintSubstrings };
