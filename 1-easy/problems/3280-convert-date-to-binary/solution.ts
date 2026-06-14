function convertDateToBinary(date: any): boolean | number | string | any {
  """
  :type date: str
  :rtype: str
  """
  return "-".join(map(lambda x: bin(int(x))[2:], date.split('-')));
}

export { convertDateToBinary };
