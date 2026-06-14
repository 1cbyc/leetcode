function nearestValidPoint(x: any, y: any, points: any): boolean | number | string | any {
  """
  :type x: int
  :type y: int
  :type points: List[List[int]]
  :rtype: int
  """
  smallest, idx = float("inf"), -1
  for (i, (r, c) in enumerate(points)) {
      dx, dy = x-r, y-c
      if (dx*dy == 0 && abs(dx)+abs(dy) < smallest) {
          smallest = abs(dx)+abs(dy)
          idx = i
  return idx;
}

export { nearestValidPoint };
