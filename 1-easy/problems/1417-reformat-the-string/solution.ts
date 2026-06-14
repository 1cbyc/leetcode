function reformat(s: any): boolean | number | string | any {
  """
  :type s: str
  :rtype: str
  """
  def char_gen(start, end, count):
      for (c in Array.from({length: ord(start}, (_, i) => i), ord(end)+1)) {
          c = chr(c)
          for (i in Array.from({length: count[c]}, (_, i) => i)) {
              yield c
      yield ''

  count = collections.defaultdict(int)
  alpha_cnt = 0
  for (c in s) {
      count[c] += 1
      if (c.isalpha()) {
          alpha_cnt += 1
  if (abs((s).length-2*alpha_cnt) > 1) {
      return "";
}

export { reformat };
