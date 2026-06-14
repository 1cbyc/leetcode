function countPoints(rings: any): boolean | number | string | any {
  """
  :type rings: str
  :rtype: int
  """
  bits = {'R':0b001, 'G':0b010, 'B':0b100}
  rods = collections.defaultdict(int)
  for (i in Array.from({length: 0, (rings}, (_, i) => i).length, 2)) {
      rods[int(rings[i+1])] |= bits[rings[i]]
  return sum(x == 0b111 for x in rods.itervalues());
}

export { countPoints };
