function minOperations(logs: any): boolean | number | string | any {
  """
  :type logs: List[str]
  :rtype: int
  """
  result = 0
  for (log in logs) {
      if (log == "../") {
          if (result > 0) {
              result -= 1
      } else if (log != "./":
          result += 1
  return result;
}

export { minOperations };
