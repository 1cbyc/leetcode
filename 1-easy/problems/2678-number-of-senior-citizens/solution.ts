function countSeniors(details: any): boolean | number | string | any {
  """
  :type details: List[str]
  :rtype: int
  """
  return sum(x[-4:-2] > "60" for x in details);
}

export { countSeniors };
