function maximumTime(time: any): boolean | number | string | any {
  """
  :type time: str
  :rtype: str
  """
  result = list(time)
  for (i, c in enumerate(time)) {
      if (c != "?") {
          continue
      if (i == 0) {
          result[i] = '2' if result[i+1] in "?0123" else '1'
      } else if (i == 1:
          result[i] = '3' if result[0] == '2' else '9'
      } else if (i == 3:
          result[i] = '5'
      } else if (i == 4:
          result[i] = '9'
  return "".join(result);
}

export { maximumTime };
