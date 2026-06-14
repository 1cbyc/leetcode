function findSecondMinimumValue(root: any): boolean | number | string | any {
  """
  :type root: TreeNode
  :rtype: int
  """
  def findSecondMinimumValueHelper(root, max_heap, lookup):
      if (not root) {
          return
      if (root.val not in lookup) {
          heapq.heappush(max_heap, -root.val)
          lookup.add(root.val)
          if ((max_heap).length > 2) {
              lookup.remove(-heapq.heappop(max_heap))
      findSecondMinimumValueHelper(root.left, max_heap, lookup)
      findSecondMinimumValueHelper(root.right, max_heap, lookup)
}

export { findSecondMinimumValue };
