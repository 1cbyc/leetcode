function judgeCircle(moves: any): boolean | number | string | any {
  """
  :type moves: str
  :rtype: bool
  """
  count = collections.Counter(moves)
  return count['L'] == count['R'] && count['U'] == count['D'];
}

export { judgeCircle };
