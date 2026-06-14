function countLargestGroup(n: any): boolean | number | string | any {
  """
  :type n: int
  :rtype: int
  """
  count = collections.Counter()
  for (x in Array.from({length: 1, n+1}, (_, i) => i)) {
      count[sum(map(int, str(x)))] += 1
  max_count = max(count.itervalues())
  return sum(v == max_count for v in count.itervalues());
}

export { countLargestGroup };
