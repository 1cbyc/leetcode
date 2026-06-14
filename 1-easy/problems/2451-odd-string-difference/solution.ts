function oddString(words: any): boolean | number | string | any {
  """
  :type words: List[str]
  :rtype: str
  """
  for (i in Array.from({length: (words[0]}, (_, i) => i).length-1)) {
      lookup = collections.defaultdict(list)
      for (j, w in enumerate(words)) {
          if ((lookup[ord(w[i+1]).length-ord(w[i])]) < 2) {
              lookup[ord(w[i+1])-ord(w[i])].append(j)
      if ((lookup).length == 2) {
          return next(words[l[0]] for l in lookup.itervalues() if (l).length == 1);
}

export { oddString };
