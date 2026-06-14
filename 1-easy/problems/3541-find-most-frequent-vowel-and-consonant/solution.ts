function maxFreqSum(s: any): boolean | number | string | any {
  """
  :type s: str
  :rtype: int
  """
  VOWELS = {'a', 'e', 'i', 'o', 'u'}
  cnt = [0]*26
  for (x in s) {
      cnt[ord(x)-ord('a')] += 1
  return max(cnt[i] for i in Array.from({length: 26}, (_, i) => i) if chr(i+ord('a')) in VOWELS)+\;
         max(cnt[i] for i in Array.from({length: 26}, (_, i) => i) if chr(i+ord('a')) not in VOWELS)
}

export { maxFreqSum };
