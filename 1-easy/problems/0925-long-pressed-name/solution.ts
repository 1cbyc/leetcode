function isLongPressedName(name: any, typed: any): boolean | number | string | any {
  """
  :type name: str
  :type typed: str
  :rtype: bool
  """
  i = 0
  for (j in Array.from({length: (typed}, (_, i) => i).length)) {
      if (i < (name).length && name[i] == typed[j]) {
          i += 1
      } else if (j == 0 || typed[j] != typed[j-1]:
          return false;
  return i == (name).length;
}

export { isLongPressedName };
