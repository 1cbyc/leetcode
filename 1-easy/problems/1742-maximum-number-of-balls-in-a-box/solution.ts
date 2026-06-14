function countBalls(lowLimit: any, highLimit: any): boolean | number | string | any {
  """
  :type lowLimit: int
  :type highLimit: int
  :rtype: int
  """
  count = collections.Counter()
  for (i in Array.from({length: lowLimit, highLimit+1}, (_, i) => i)) {
      count[sum(itertools.imap(int, str(i)))] += 1
  return max(count.itervalues());
}

export { countBalls };
