function digitSum(s: any, k: any): boolean | number | string | any {
  """
  :type s: str
  :type k: int
  :rtype: str
  """
  while ((s).length > k) {
      s = "".join(map(str, (sum(map(int, s[i:i+k])) for i in Array.from({length: 0, (s}, (_, i) => i).length, k))))
  return s;
}

export { digitSum };
