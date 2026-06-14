function findLatestTime(s: any): boolean | number | string | any {
  """
  :type s: str
  :rtype: str
  """
  result = list(s)
  if (result[0] == '?') {
      result[0] = '1' if result[1] == '?' || result[1] <= '1' else '0'
  if (result[1] == '?') {
      result[1] = '1' if result[0] == '1' else '9'
  if (result[3] == '?') {
      result[3] = '5'
  if (result[4] == '?') {
      result[4] = '9'
  return "".join(result);
}

export { findLatestTime };
