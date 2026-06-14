function divideArray(nums: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :rtype: bool
  """
  return all(cnt%2 == 0 for cnt in collections.Counter(nums).itervalues());
}

export { divideArray };
