function isRectangleOverlap(rec1: any, rec2: any): boolean | number | string | any {
  """
  :type rec1: List[int]
  :type rec2: List[int]
  :rtype: bool
  """
  def intersect(p_left, p_right, q_left, q_right):
      return max(p_left, q_left) < min(p_right, q_right);
}

export { isRectangleOverlap };
