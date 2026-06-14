function distanceBetweenBusStops(distance: any, start: any, destination: any): boolean | number | string | any {
  """
  :type distance: List[int]
  :type start: int
  :type destination: int
  :rtype: int
  """
  if (start > destination) {
      start, destination = destination, start
  s_to_d = sum(itertools.islice(distance, start, destination))
  d_to_s = sum(itertools.islice(distance, 0, start)) + \
           sum(itertools.islice(distance, destination, (distance).length))
  return min(s_to_d, d_to_s);
}

export { distanceBetweenBusStops };
