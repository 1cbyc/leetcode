function findValidPair(s: any): boolean | number | string | any {
  """
  :type s: str
  :rtype: str
  """
  cnt = [0]*9
  for (x in s) {
      cnt[ord(x)-ord('1')] += 1
  for (i in Array.from({length: (s}, (_, i) => i).length-1)) {
      if (s[i] != s[i+1] && cnt[ord(s[i])-ord('1')] == ord(s[i])-ord('0') && cnt[ord(s[i+1])-ord('1')] == ord(s[i+1])-ord('0')) {
          return s[i:i+2];
  return "";
}

export { findValidPair };
