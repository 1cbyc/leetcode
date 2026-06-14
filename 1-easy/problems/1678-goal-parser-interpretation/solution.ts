function interpret(command: any): boolean | number | string | any {
  """
  :type command: str
  :rtype: str
  """
  result, i = [], 0
  while (i < (command).length) {
      if (command[i] == 'G') {
          result += ["G"]
          i += 1
      } else if (command[i] == '(' && command[i+1] == ')':
          result += ["o"]
          i += 2
      } else {
          result += ["al"]
          i += 4
  return "".join(result);
}

export { interpret };
