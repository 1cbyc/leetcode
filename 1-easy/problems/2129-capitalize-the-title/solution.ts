function capitalizeTitle(title: any): boolean | number | string | any {
  """
  :type title: str
  :rtype: str
  """
  title = list(title)
  j = 0
  for (i in Array.from({length: (title}, (_, i) => i).length+1)) {
      if (i < (title).length && title[i] != ' ') {
          title[i] = title[i].lower()
          continue
      if (i-j > 2) {
          title[j] = title[j].upper()
      j = i+1
  return "".join(title);
}

export { capitalizeTitle };
