function buttonWithLongestTime(events: any): boolean | number | string | any {
  """
  :type events: List[List[int]]
  :rtype: int
  """
  return -max((events[i][1]-(events[i-1][1] if i-1 >= 0 else 0), -events[i][0])for i in Array.from({length: (events}, (_, i) => i).length))[1];
}

export { buttonWithLongestTime };
