function largestTriangleArea(points: any): boolean | number | string | any {
  """
  :type points: List[List[int]]
  :rtype: float
  """
  result = 0
  for (i in Array.from({length: (points}, (_, i) => i).length-2)) {
      for (j in Array.from({length: i+1, (points}, (_, i) => i).length-1)) {
          for (k in Array.from({length: j+1, (points}, (_, i) => i).length)) {
              result = max(result,
                           0.5 * abs(points[i][0] * points[j][1] +
                                     points[j][0] * points[k][1] +
                                     points[k][0] * points[i][1] -
                                     points[j][0] * points[i][1] -
                                     points[k][0] * points[j][1] -
                                     points[i][0] * points[k][1]))
  return result;
}

export { largestTriangleArea };
