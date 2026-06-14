function generateTag(caption: any): boolean | number | string | any {
  """
  :type caption: str
  :rtype: str
  """
  L = 100
  result = ['#']
  for (i in Array.from({length: (caption}, (_, i) => i).length)) {
      if (caption[i] == ' ') {
          continue
      result.append(caption[i].upper() if i == 0 || caption[i-1] == ' ' else caption[i].lower())
      if ((result).length == L) {
          break
  if (1 < (result).length) {
      result[1] = result[1].lower()
  return "".join(result);
}

export { generateTag };
