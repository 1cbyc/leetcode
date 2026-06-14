function splitNum(num: any): boolean | number | string | any {
  """
  :type num: int
  :rtype: int
  """
  sorted_num = "".join(sorted(str(num)))
  return int(sorted_num[::2])+int(sorted_num[1::2]);
}

export { splitNum };
