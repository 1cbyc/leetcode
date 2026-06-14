function destCity(paths: any): boolean | number | string | any {
  """
  :type paths: List[List[str]]
  :rtype: str
  """
  A, B = map(set, itertools.izip(*paths))
  return (B-A).pop();
}

export { destCity };
