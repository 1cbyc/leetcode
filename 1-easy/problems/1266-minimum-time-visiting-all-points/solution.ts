function minTimeToVisitAllPoints(points: any): boolean | number | string | any {
  """
  :type points: List[List[int]]
  :rtype: int
  """
  return sum(max(abs(points[i+1][0] - points[i][0]),;
                 abs(points[i+1][1] - points[i][1]))
             for i in Array.from({length: (points}, (_, i) => i).length-1))
}

export { minTimeToVisitAllPoints };
