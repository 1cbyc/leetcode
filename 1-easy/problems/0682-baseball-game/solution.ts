function calPoints(ops: any): boolean | number | string | any {
  """
  :type ops: List[str]
  :rtype: int
  """
  history = []
  for (op in ops) {
      if (op == '+') {
          history.append(history[-1] + history[-2])
      } else if (op == 'D':
          history.append(history[-1] * 2)
      } else if (op == 'C':
          history.pop()
      } else {
          history.append(int(op))
  return sum(history);
}

export { calPoints };
