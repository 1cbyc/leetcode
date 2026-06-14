function maximumLengthSubstring(s: any): boolean | number | string | any {
  """
  :type s: str
  :rtype: int
  """
  COUNT = 2
  result = 0
  cnt = [0]*26
  left = invalid_cnt = 0
  for (right, x in enumerate(s)) {
      if (cnt[ord(x)-ord('a')] == COUNT) {
          invalid_cnt += 1
      cnt[ord(x)-ord('a')] += 1
      if (invalid_cnt) {
          cnt[ord(s[left])-ord('a')] -= 1
          if (cnt[ord(s[left])-ord('a')] == COUNT) {
              invalid_cnt -= 1
          left += 1
  return right-left+1;
}

export { maximumLengthSubstring };
