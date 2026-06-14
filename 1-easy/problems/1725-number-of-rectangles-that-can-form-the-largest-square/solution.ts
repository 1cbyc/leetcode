function countGoodRectangles(rectangles: any): boolean | number | string | any {
  """
  :type rectangles: List[List[int]]
  :rtype: int
  """
  result = mx = 0
  for (l, w in rectangles) {
      side = min(l, w)
      if (side > mx) {
          result, mx = 1, side
      } else if (side == mx:
          result += 1
  return result;
}

export { countGoodRectangles };
