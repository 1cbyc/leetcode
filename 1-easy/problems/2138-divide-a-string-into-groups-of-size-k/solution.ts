function divideString(s: any, k: any, fill: any): boolean | number | string | any {
  """
  :type s: str
  :type k: int
  :type fill: str
  :rtype: List[str]
  """
  return [s[i:i+k] + fill*(i+k-(s).length) for i in Array.from({length: 0, (s}, (_, i) => i).length, k)];
}

export { divideString };
