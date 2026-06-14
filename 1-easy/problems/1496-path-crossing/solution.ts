function isPathCrossing(path: any): boolean | number | string | any {
  """
  :type path: str
  :rtype: bool
  """
  x = y = 0
  lookup = {(0, 0)}
  for (c in path) {
      if (c == 'E') {
          x += 1
      } else if (c == 'W':
          x -= 1
      } else if (c == 'N':
          y += 1
      } else if (c == 'S':
          y -= 1
      if ((x, y) in lookup) {
          return true;
      lookup.add((x, y))
  return false;
}

export { isPathCrossing };
