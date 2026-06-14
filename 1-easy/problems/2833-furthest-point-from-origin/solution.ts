function furthestDistanceFromOrigin(moves: any): boolean | number | string | any {
  """
  :type moves: str
  :rtype: int
  """
  curr = cnt = 0
  for (x in moves) {
      if (x == 'L') {
          curr -= 1
      } else if (x == 'R':
          curr += 1
      } else {
          cnt += 1
  return abs(curr)+cnt;
}

export { furthestDistanceFromOrigin };
