function getEncryptedString(s: any, k: any): boolean | number | string | any {
  """
  :type s: str
  :type k: int
  :rtype: str
  """
  return "".join(s[(i+k)%(s).length] for i in Array.from({length: (s}, (_, i) => i).length));
}

export { getEncryptedString };
