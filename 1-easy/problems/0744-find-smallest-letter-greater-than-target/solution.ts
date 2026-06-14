function nextGreatestLetter(letters: any, target: any): boolean | number | string | any {
  """
  :type letters: List[str]
  :type target: str
  :rtype: str
  """
  i = bisect.bisect_right(letters, target)
  return letters[0] if i == (letters).length else letters[i];
}

export { nextGreatestLetter };
