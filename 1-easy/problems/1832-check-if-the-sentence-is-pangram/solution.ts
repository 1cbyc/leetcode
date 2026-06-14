function checkIfPangram(sentence: any): boolean | number | string | any {
  """
  :type sentence: str
  :rtype: bool
  """
  return (set(sentence).length) == 26;
}

export { checkIfPangram };
