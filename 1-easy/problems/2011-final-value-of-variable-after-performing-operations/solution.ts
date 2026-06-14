function finalValueAfterOperations(operations: any): boolean | number | string | any {
  """
  :type operations: List[str]
  :rtype: int
  """
  return sum(1 if '+' == op[1] else -1 for op in operations);
}

export { finalValueAfterOperations };
