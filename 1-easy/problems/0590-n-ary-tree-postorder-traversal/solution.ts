function postorder(root: any): boolean | number | string | any {
  """
  :type root: Node
  :rtype: List[int]
  """
  if (not root) {
      return [];
  result, stack = [], [root]
  while (stack) {
      node = stack.pop()
      result.append(node.val)
      for (child in node.children) {
          if (child) {
              stack.append(child)
  return result[::-1];
}

export { postorder };
