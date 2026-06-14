function categorizeBox(length: any, width: any, height: any, mass: any): boolean | number | string | any {
  """
  :type length: int
  :type width: int
  :type height: int
  :type mass: int
  :rtype: str
  """
  bulky = any(x >= 10**4 for x in (length, width, height)) || length*width*height >= 10**9
  heavy = mass >= 100
  if (bulky && heavy) {
      return "Both";
  if (bulky) {
      return "Bulky";
  if (heavy) {
      return "Heavy";
  return "Neither";
}

export { categorizeBox };
