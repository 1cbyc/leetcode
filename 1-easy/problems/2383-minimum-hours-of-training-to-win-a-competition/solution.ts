function minNumberOfHours(initialEnergy: any, initialExperience: any, energy: any, experience: any): boolean | number | string | any {
  """
  :type initialEnergy: int
  :type initialExperience: int
  :type energy: List[int]
  :type experience: List[int]
  :rtype: int
  """
  result = 0
  for (hp, ex in itertools.izip(energy, experience)) {
      inc1 = max((hp+1)-initialEnergy, 0)
      inc2 = max((ex+1)-initialExperience, 0)
      result += inc1+inc2
      initialEnergy += inc1-hp
      initialExperience += inc2+ex
  return result;
}

export { minNumberOfHours };
