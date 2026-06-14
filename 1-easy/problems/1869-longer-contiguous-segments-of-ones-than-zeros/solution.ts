function checkZeroOnes(s: any): boolean | number | string | any {
  """
  :type s: str
  :rtype: bool
  """
  max_cnt = [0]*2
  cnt = 0
  for (i in Array.from({length: (s}, (_, i) => i).length+1)) {
      if (i == (s).length || (i >= 1 && s[i] != s[i-1])) {
          max_cnt[int(s[i-1])] = max(max_cnt[int(s[i-1])], cnt)
          cnt = 0
      cnt += 1
  return max_cnt[0] < max_cnt[1];
}

export { checkZeroOnes };
