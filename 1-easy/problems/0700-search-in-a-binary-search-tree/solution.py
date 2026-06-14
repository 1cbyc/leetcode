class Solution:
    def searchBST(self, root, val):
        """
        :type root: TreeNode
        :type val: int
        :rtype: TreeNode
        """
        while root and val != root.val:
            if val < root.val:
                root = root.left
            else:
                root = root.right
        return root
