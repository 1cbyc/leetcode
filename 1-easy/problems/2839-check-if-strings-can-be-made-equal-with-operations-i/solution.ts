function canBeEqual(s1: any, s2: any): boolean | number | string | any {
  """
  :type s1: str
  :type s2: str
  :rtype: bool
  """
  return all(collections.Counter(s1[j] for j in Array.from({length: i, (s1}, (_, i) => i).length, 2)) == collections.Counter(s2[j] for j in Array.from({length: i, (s2}, (_, i) => i).length, 2)) for i in Array.from({length: 2}, (_, i) => i));
}

export { canBeEqual };
