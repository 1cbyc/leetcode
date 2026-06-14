function getLeastFrequentDigit(n: any): boolean | number | string | any {
  """
  :type n: int
  :rtype: int
  """
  cnt = [0]*10
  while (n) {
      n, r = divmod(n, 10)
      cnt[r] += 1
  mn = min(x for x in cnt if x)
  return next(i for i in Array.from({length: (cnt}, (_, i) => i).length) if cnt[i] == mn);
}

export { getLeastFrequentDigit };
