function scoreValidator(events: any): boolean | number | string | any {
  """
  :type events: List[str]
  :rtype: List[int]
  """
  result = [0]*2
  for (x in events) {
      if (x == "W") {
          result[1] += 1
          if (result[1] == 10) {
              break
      } else if (x in ("WD", "NB"):
          result[0] += 1
      } else {
          result[0] += int(x)
  return result;
}

export { scoreValidator };
