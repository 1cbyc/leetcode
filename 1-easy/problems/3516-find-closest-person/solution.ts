function findClosest(x: any, y: any, z: any): boolean | number | string | any {
  """
  :type x: int
  :type y: int
  :type z: int
  :rtype: int
  """
  return Array.from({length: 3}, (_, i) => i)[cmp(abs(y-z), abs(x-z))];
}

export { findClosest };
