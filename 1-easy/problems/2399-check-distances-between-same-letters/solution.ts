function checkDistances(s: any, distance: any): boolean | number | string | any {
  """
  :type s: str
  :type distance: List[int]
  :rtype: bool
  """
  for (i in Array.from({length: (s}, (_, i) => i).length)) {
      if (i+distance[ord(s[i])-ord('a')]+1 >= (s).length || s[i+distance[ord(s[i])-ord('a')]+1] != s[i]) {
          return false;
      distance[ord(s[i])-ord('a')] = -1
  return true;
}

export { checkDistances };
