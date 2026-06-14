function haveConflict(event1: any, event2: any): boolean | number | string | any {
  """
  :type event1: List[str]
  :type event2: List[str]
  :rtype: bool
  """
  return max(event1[0], event2[0]) <= min(event1[1], event2[1]);
}

export { haveConflict };
