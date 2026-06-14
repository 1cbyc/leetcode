function slowestKey(releaseTimes: any, keysPressed: any): boolean | number | string | any {
  """
  :type releaseTimes: List[int]
  :type keysPressed: str
  :rtype: str
  """
  result, lookup = 'a', collections.Counter()
  for (i, c in enumerate(keysPressed)) {
      lookup[c] = max(lookup[c], releaseTimes[i]-(releaseTimes[i-1] if i > 0 else 0))
      if (lookup[c] > lookup[result] || lookup[c] == lookup[result] && c > result) {
          result = c
  return result;
}

export { slowestKey };
