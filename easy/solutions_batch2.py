SOLUTIONS = {
    101: {
        "title": "Symmetric Tree",
        "slug": "symmetric-tree",
        "url": "https://leetcode.com/problems/symmetric-tree/",
        "python": '''# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSymmetric(self, root: Optional[TreeNode]) -> bool:
        def isMirror(t1, t2):
            if not t1 and not t2:
                return True
            if not t1 or not t2:
                return False
            return t1.val == t2.val and isMirror(t1.left, t2.right) and isMirror(t1.right, t2.left)
        return isMirror(root, root)''',
        "cpp": '''/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    bool isSymmetric(TreeNode* root) {
        return isMirror(root, root);
    }
private:
    bool isMirror(TreeNode* t1, TreeNode* t2) {
        if (!t1 && !t2) return true;
        if (!t1 || !t2) return false;
        return t1->val == t2->val && isMirror(t1->left, t2->right) && isMirror(t1->right, t2->left);
    }
};''',
        "typescript": '''/**
 * Definition for a binary tree node.
 */
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

function isSymmetric(root: TreeNode | null): boolean {
    function isMirror(t1: TreeNode | null, t2: TreeNode | null): boolean {
        if (!t1 && !t2) return true;
        if (!t1 || !t2) return false;
        return t1.val === t2.val && isMirror(t1.left, t2.right) && isMirror(t1.right, t2.left);
    }
    return isMirror(root, root);
}'''
    },
    104: {
        "title": "Maximum Depth of Binary Tree",
        "slug": "maximum-depth-of-binary-tree",
        "url": "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
        "python": '''# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        if not root:
            return 0
        return 1 + max(self.maxDepth(root.left), self.maxDepth(root.right))''',
        "cpp": '''/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    int maxDepth(TreeNode* root) {
        if (!root) return 0;
        return 1 + max(maxDepth(root->left), maxDepth(root->right));
    }
};''',
        "typescript": '''/**
 * Definition for a binary tree node.
 */
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

function maxDepth(root: TreeNode | null): number {
    if (!root) return 0;
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}'''
    },
    107: {
        "title": "Binary Tree Level Order Traversal II",
        "slug": "binary-tree-level-order-traversal-ii",
        "url": "https://leetcode.com/problems/binary-tree-level-order-traversal-ii/",
        "python": '''# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def levelOrderBottom(self, root: Optional[TreeNode]) -> List[List[int]]:
        if not root:
            return []
        result = []
        queue = [root]
        while queue:
            level = []
            next_queue = []
            for node in queue:
                level.append(node.val)
                if node.left:
                    next_queue.append(node.left)
                if node.right:
                    next_queue.append(node.right)
            result.append(level)
            queue = next_queue
        return result[::-1]''',
        "cpp": '''/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    vector<vector<int>> levelOrderBottom(TreeNode* root) {
        vector<vector<int>> result;
        if (!root) return result;
        queue<TreeNode*> q;
        q.push(root);
        while (!q.empty()) {
            vector<int> level;
            int size = q.size();
            for (int i = 0; i < size; i++) {
                TreeNode* node = q.front();
                q.pop();
                level.push_back(node->val);
                if (node->left) q.push(node->left);
                if (node->right) q.push(node->right);
            }
            result.push_back(level);
        }
        reverse(result.begin(), result.end());
        return result;
    }
};''',
        "typescript": '''/**
 * Definition for a binary tree node.
 */
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

function levelOrderBottom(root: TreeNode | null): number[][] {
    const result: number[][] = [];
    if (!root) return result;
    const queue: TreeNode[] = [root];
    while (queue.length > 0) {
        const level: number[] = [];
        const nextQueue: TreeNode[] = [];
        for (const node of queue) {
            level.push(node.val);
            if (node.left) nextQueue.push(node.left);
            if (node.right) nextQueue.push(node.right);
        }
        result.push(level);
        queue.splice(0, queue.length, ...nextQueue);
    }
    return result.reverse();
}'''
    },
    108: {
        "title": "Convert Sorted Array to Binary Search Tree",
        "slug": "convert-sorted-array-to-binary-search-tree",
        "url": "https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/",
        "python": '''# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def sortedArrayToBST(self, nums: List[int]) -> Optional[TreeNode]:
        def buildBST(left, right):
            if left > right:
                return None
            mid = (left + right) // 2
            root = TreeNode(nums[mid])
            root.left = buildBST(left, mid - 1)
            root.right = buildBST(mid + 1, right)
            return root
        return buildBST(0, len(nums) - 1)''',
        "cpp": '''/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    TreeNode* sortedArrayToBST(vector<int>& nums) {
        return buildBST(nums, 0, nums.size() - 1);
    }
private:
    TreeNode* buildBST(vector<int>& nums, int left, int right) {
        if (left > right) return nullptr;
        int mid = left + (right - left) / 2;
        TreeNode* root = new TreeNode(nums[mid]);
        root->left = buildBST(nums, left, mid - 1);
        root->right = buildBST(nums, mid + 1, right);
        return root;
    }
};''',
        "typescript": '''/**
 * Definition for a binary tree node.
 */
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

function sortedArrayToBST(nums: number[]): TreeNode | null {
    function buildBST(left: number, right: number): TreeNode | null {
        if (left > right) return null;
        const mid = Math.floor((left + right) / 2);
        const root = new TreeNode(nums[mid]);
        root.left = buildBST(left, mid - 1);
        root.right = buildBST(mid + 1, right);
        return root;
    }
    return buildBST(0, nums.length - 1);
}'''
    },
    110: {
        "title": "Balanced Binary Tree",
        "slug": "balanced-binary-tree",
        "url": "https://leetcode.com/problems/balanced-binary-tree/",
        "python": '''# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isBalanced(self, root: Optional[TreeNode]) -> bool:
        def getHeight(node):
            if not node:
                return 0
            left_height = getHeight(node.left)
            if left_height == -1:
                return -1
            right_height = getHeight(node.right)
            if right_height == -1:
                return -1
            if abs(left_height - right_height) > 1:
                return -1
            return max(left_height, right_height) + 1
        return getHeight(root) != -1''',
        "cpp": '''/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    bool isBalanced(TreeNode* root) {
        return getHeight(root) != -1;
    }
private:
    int getHeight(TreeNode* node) {
        if (!node) return 0;
        int left_height = getHeight(node->left);
        if (left_height == -1) return -1;
        int right_height = getHeight(node->right);
        if (right_height == -1) return -1;
        if (abs(left_height - right_height) > 1) return -1;
        return max(left_height, right_height) + 1;
    }
};''',
        "typescript": '''/**
 * Definition for a binary tree node.
 */
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

function isBalanced(root: TreeNode | null): boolean {
    function getHeight(node: TreeNode | null): number {
        if (!node) return 0;
        const left_height = getHeight(node.left);
        if (left_height === -1) return -1;
        const right_height = getHeight(node.right);
        if (right_height === -1) return -1;
        if (Math.abs(left_height - right_height) > 1) return -1;
        return Math.max(left_height, right_height) + 1;
    }
    return getHeight(root) !== -1;
}'''
    },
    111: {
        "title": "Minimum Depth of Binary Tree",
        "slug": "minimum-depth-of-binary-tree",
        "url": "https://leetcode.com/problems/minimum-depth-of-binary-tree/",
        "python": '''# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def minDepth(self, root: Optional[TreeNode]) -> int:
        if not root:
            return 0
        if not root.left:
            return 1 + self.minDepth(root.right)
        if not root.right:
            return 1 + self.minDepth(root.left)
        return 1 + min(self.minDepth(root.left), self.minDepth(root.right))''',
        "cpp": '''/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    int minDepth(TreeNode* root) {
        if (!root) return 0;
        if (!root->left) return 1 + minDepth(root->right);
        if (!root->right) return 1 + minDepth(root->left);
        return 1 + min(minDepth(root->left), minDepth(root->right));
    }
};''',
        "typescript": '''/**
 * Definition for a binary tree node.
 */
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

function minDepth(root: TreeNode | null): number {
    if (!root) return 0;
    if (!root.left) return 1 + minDepth(root.right);
    if (!root.right) return 1 + minDepth(root.left);
    return 1 + Math.min(minDepth(root.left), minDepth(root.right));
}'''
    },
    112: {
        "title": "Path Sum",
        "slug": "path-sum",
        "url": "https://leetcode.com/problems/path-sum/",
        "python": '''# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def hasPathSum(self, root: Optional[TreeNode], targetSum: int) -> bool:
        if not root:
            return False
        if not root.left and not root.right:
            return root.val == targetSum
        return self.hasPathSum(root.left, targetSum - root.val) or self.hasPathSum(root.right, targetSum - root.val)''',
        "cpp": '''/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    bool hasPathSum(TreeNode* root, int targetSum) {
        if (!root) return false;
        if (!root->left && !root->right) return root->val == targetSum;
        return hasPathSum(root->left, targetSum - root->val) || hasPathSum(root->right, targetSum - root->val);
    }
};''',
        "typescript": '''/**
 * Definition for a binary tree node.
 */
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    if (!root) return false;
    if (!root.left && !root.right) return root.val === targetSum;
    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
}'''
    },
    118: {
        "title": "Pascal's Triangle",
        "slug": "pascals-triangle",
        "url": "https://leetcode.com/problems/pascals-triangle/",
        "python": '''class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
        if numRows == 0:
            return []
        result = [[1]]
        for i in range(1, numRows):
            prev = result[-1]
            current = [1]
            for j in range(len(prev) - 1):
                current.append(prev[j] + prev[j + 1])
            current.append(1)
            result.append(current)
        return result''',
        "cpp": '''class Solution {
public:
    vector<vector<int>> generate(int numRows) {
        vector<vector<int>> result;
        for (int i = 0; i < numRows; i++) {
            vector<int> row(i + 1, 1);
            for (int j = 1; j < i; j++) {
                row[j] = result[i - 1][j - 1] + result[i - 1][j];
            }
            result.push_back(row);
        }
        return result;
    }
};''',
        "typescript": '''function generate(numRows: number): number[][] {
    const result: number[][] = [];
    for (let i = 0; i < numRows; i++) {
        const row = new Array(i + 1).fill(1);
        for (let j = 1; j < i; j++) {
            row[j] = result[i - 1][j - 1] + result[i - 1][j];
        }
        result.push(row);
    }
    return result;
}'''
    },
    119: {
        "title": "Pascal's Triangle II",
        "slug": "pascals-triangle-ii",
        "url": "https://leetcode.com/problems/pascals-triangle-ii/",
        "python": '''class Solution:
    def getRow(self, rowIndex: int) -> List[int]:
        row = [1]
        for i in range(rowIndex):
            row = [1] + [row[j] + row[j + 1] for j in range(len(row) - 1)] + [1]
        return row''',
        "cpp": '''class Solution {
public:
    vector<int> getRow(int rowIndex) {
        vector<int> row(rowIndex + 1, 1);
        for (int i = 1; i <= rowIndex; i++) {
            for (int j = i - 1; j > 0; j--) {
                row[j] = row[j] + row[j - 1];
            }
        }
        return row;
    }
};''',
        "typescript": '''function getRow(rowIndex: number): number[] {
    const row = new Array(rowIndex + 1).fill(1);
    for (let i = 1; i <= rowIndex; i++) {
        for (let j = i - 1; j > 0; j--) {
            row[j] = row[j] + row[j - 1];
        }
    }
    return row;
}'''
    },
    121: {
        "title": "Best Time to Buy and Sell Stock",
        "slug": "best-time-to-buy-and-sell-stock",
        "url": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
        "python": '''class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        min_price = float('inf')
        max_profit = 0
        for price in prices:
            min_price = min(min_price, price)
            max_profit = max(max_profit, price - min_price)
        return max_profit''',
        "cpp": '''class Solution {
public:
    int maxProfit(vector<int>& prices) {
        int min_price = INT_MAX;
        int max_profit = 0;
        for (int price : prices) {
            min_price = min(min_price, price);
            max_profit = max(max_profit, price - min_price);
        }
        return max_profit;
    }
};''',
        "typescript": '''function maxProfit(prices: number[]): number {
    let min_price = Infinity;
    let max_profit = 0;
    for (const price of prices) {
        min_price = Math.min(min_price, price);
        max_profit = Math.max(max_profit, price - min_price);
    }
    return max_profit;
}'''
    },
    125: {
        "title": "Valid Palindrome",
        "slug": "valid-palindrome",
        "url": "https://leetcode.com/problems/valid-palindrome/",
        "python": '''class Solution:
    def isPalindrome(self, s: str) -> bool:
        filtered = ''.join(char.lower() for char in s if char.isalnum())
        return filtered == filtered[::-1]''',
        "cpp": '''class Solution {
public:
    bool isPalindrome(string s) {
        string filtered;
        for (char c : s) {
            if (isalnum(c)) {
                filtered += tolower(c);
            }
        }
        string reversed = filtered;
        reverse(reversed.begin(), reversed.end());
        return filtered == reversed;
    }
};''',
        "typescript": '''function isPalindrome(s: string): boolean {
    const filtered = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return filtered === filtered.split('').reverse().join('');
}'''
    },
    136: {
        "title": "Single Number",
        "slug": "single-number",
        "url": "https://leetcode.com/problems/single-number/",
        "python": '''class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        result = 0
        for num in nums:
            result ^= num
        return result''',
        "cpp": '''class Solution {
public:
    int singleNumber(vector<int>& nums) {
        int result = 0;
        for (int num : nums) {
            result ^= num;
        }
        return result;
    }
};''',
        "typescript": '''function singleNumber(nums: number[]): number {
    let result = 0;
    for (const num of nums) {
        result ^= num;
    }
    return result;
}'''
    },
    141: {
        "title": "Linked List Cycle",
        "slug": "linked-list-cycle",
        "url": "https://leetcode.com/problems/linked-list-cycle/",
        "python": '''# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        slow = head
        fast = head
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
            if slow == fast:
                return True
        return False''',
        "cpp": '''/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
class Solution {
public:
    bool hasCycle(ListNode *head) {
        ListNode* slow = head;
        ListNode* fast = head;
        while (fast && fast->next) {
            slow = slow->next;
            fast = fast->next->next;
            if (slow == fast) return true;
        }
        return false;
    }
};''',
        "typescript": '''/**
 * Definition for singly-linked list.
 */
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function hasCycle(head: ListNode | null): boolean {
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow!.next;
        fast = fast.next.next;
        if (slow === fast) return true;
    }
    return false;
}'''
    },
    144: {
        "title": "Binary Tree Preorder Traversal",
        "slug": "binary-tree-preorder-traversal",
        "url": "https://leetcode.com/problems/binary-tree-preorder-traversal/",
        "python": '''# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def preorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        result = []
        stack = [root] if root else []
        while stack:
            node = stack.pop()
            if node:
                result.append(node.val)
                stack.append(node.right)
                stack.append(node.left)
        return result''',
        "cpp": '''/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    vector<int> preorderTraversal(TreeNode* root) {
        vector<int> result;
        if (!root) return result;
        stack<TreeNode*> st;
        st.push(root);
        while (!st.empty()) {
            TreeNode* node = st.top();
            st.pop();
            result.push_back(node->val);
            if (node->right) st.push(node->right);
            if (node->left) st.push(node->left);
        }
        return result;
    }
};''',
        "typescript": '''/**
 * Definition for a binary tree node.
 */
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

function preorderTraversal(root: TreeNode | null): number[] {
    const result: number[] = [];
    const stack: (TreeNode | null)[] = root ? [root] : [];
    while (stack.length > 0) {
        const node = stack.pop();
        if (node) {
            result.push(node.val);
            if (node.right) stack.push(node.right);
            if (node.left) stack.push(node.left);
        }
    }
    return result;
}'''
    },
    145: {
        "title": "Binary Tree Postorder Traversal",
        "slug": "binary-tree-postorder-traversal",
        "url": "https://leetcode.com/problems/binary-tree-postorder-traversal/",
        "python": '''# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def postorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        result = []
        stack = []
        current = root
        last_visited = None
        while stack or current:
            if current:
                stack.append(current)
                current = current.left
            else:
                peek = stack[-1]
                if peek.right and peek.right != last_visited:
                    current = peek.right
                else:
                    result.append(peek.val)
                    last_visited = stack.pop()
        return result''',
        "cpp": '''/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    vector<int> postorderTraversal(TreeNode* root) {
        vector<int> result;
        if (!root) return result;
        stack<TreeNode*> st;
        TreeNode* current = root;
        TreeNode* last_visited = nullptr;
        while (!st.empty() || current) {
            if (current) {
                st.push(current);
                current = current->left;
            } else {
                TreeNode* peek = st.top();
                if (peek->right && peek->right != last_visited) {
                    current = peek->right;
                } else {
                    result.push_back(peek->val);
                    last_visited = peek;
                    st.pop();
                }
            }
        }
        return result;
    }
};''',
        "typescript": '''/**
 * Definition for a binary tree node.
 */
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

function postorderTraversal(root: TreeNode | null): number[] {
    const result: number[] = [];
    const stack: TreeNode[] = [];
    let current = root;
    let last_visited: TreeNode | null = null;
    while (stack.length > 0 || current) {
        if (current) {
            stack.push(current);
            current = current.left;
        } else {
            const peek = stack[stack.length - 1];
            if (peek.right && peek.right !== last_visited) {
                current = peek.right;
            } else {
                result.push(peek.val);
                last_visited = stack.pop()!;
            }
        }
    }
    return result;
}'''
    },
    155: {
        "title": "Min Stack",
        "slug": "min-stack",
        "url": "https://leetcode.com/problems/min-stack/",
        "python": '''class MinStack:

    def __init__(self):
        self.stack = []
        self.min_stack = []

    def push(self, val: int) -> None:
        self.stack.append(val)
        if not self.min_stack or val <= self.min_stack[-1]:
            self.min_stack.append(val)

    def pop(self) -> None:
        val = self.stack.pop()
        if val == self.min_stack[-1]:
            self.min_stack.pop()

    def top(self) -> int:
        return self.stack[-1]

    def getMin(self) -> int:
        return self.min_stack[-1]


# Your MinStack object will be instantiated and called as such:
# obj = MinStack()
# obj.push(val)
# obj.pop()
# param_3 = obj.top()
# param_4 = obj.getMin()''',
        "cpp": '''class MinStack {
private:
    stack<int> st;
    stack<int> min_st;
public:
    MinStack() {

    }

    void push(int val) {
        st.push(val);
        if (min_st.empty() || val <= min_st.top()) {
            min_st.push(val);
        }
    }

    void pop() {
        int val = st.top();
        st.pop();
        if (val == min_st.top()) {
            min_st.pop();
        }
    }

    int top() {
        return st.top();
    }

    int getMin() {
        return min_st.top();
    }
};

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack* obj = new MinStack();
 * obj->push(val);
 * obj->pop();
 * int param_3 = obj->top();
 * int param_4 = obj->getMin();
 */''',
        "typescript": '''class MinStack {
    private stack: number[] = [];
    private minStack: number[] = [];

    push(val: number): void {
        this.stack.push(val);
        if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
            this.minStack.push(val);
        }
    }

    pop(): void {
        const val = this.stack.pop();
        if (val === this.minStack[this.minStack.length - 1]) {
            this.minStack.pop();
        }
    }

    top(): number {
        return this.stack[this.stack.length - 1];
    }

    getMin(): number {
        return this.minStack[this.minStack.length - 1];
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */'''
    },
    160: {
        "title": "Intersection of Two Linked Lists",
        "slug": "intersection-of-two-linked-lists",
        "url": "https://leetcode.com/problems/intersection-of-two-linked-lists/",
        "python": '''# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def getIntersectionNode(self, headA: ListNode, headB: ListNode) -> Optional[ListNode]:
        a = headA
        b = headB
        while a != b:
            a = a.next if a else headB
            b = b.next if b else headA
        return a''',
        "cpp": '''/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
class Solution {
public:
    ListNode *getIntersectionNode(ListNode *headA, ListNode *headB) {
        ListNode* a = headA;
        ListNode* b = headB;
        while (a != b) {
            a = a ? a->next : headB;
            b = b ? b->next : headA;
        }
        return a;
    }
};''',
        "typescript": '''/**
 * Definition for singly-linked list.
 */
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    let a = headA;
    let b = headB;
    while (a !== b) {
        a = a ? a.next : headB;
        b = b ? b.next : headA;
    }
    return a;
}'''
    },
    168: {
        "title": "Excel Sheet Column Title",
        "slug": "excel-sheet-column-title",
        "url": "https://leetcode.com/problems/excel-sheet-column-title/",
        "python": '''class Solution:
    def convertToTitle(self, columnNumber: int) -> str:
        result = ""
        while columnNumber > 0:
            columnNumber -= 1
            result = chr(ord('A') + columnNumber % 26) + result
            columnNumber //= 26
        return result''',
        "cpp": '''class Solution {
public:
    string convertToTitle(int columnNumber) {
        string result = "";
        while (columnNumber > 0) {
            columnNumber--;
            result = char('A' + columnNumber % 26) + result;
            columnNumber /= 26;
        }
        return result;
    }
};''',
        "typescript": '''function convertToTitle(columnNumber: number): string {
    let result = "";
    while (columnNumber > 0) {
        columnNumber--;
        result = String.fromCharCode(65 + (columnNumber % 26)) + result;
        columnNumber = Math.floor(columnNumber / 26);
    }
    return result;
}'''
    },
    169: {
        "title": "Majority Element",
        "slug": "majority-element",
        "url": "https://leetcode.com/problems/majority-element/",
        "python": '''class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        count = 0
        candidate = None
        for num in nums:
            if count == 0:
                candidate = num
            count += 1 if num == candidate else -1
        return candidate''',
        "cpp": '''class Solution {
public:
    int majorityElement(vector<int>& nums) {
        int count = 0;
        int candidate = 0;
        for (int num : nums) {
            if (count == 0) {
                candidate = num;
            }
            count += (num == candidate) ? 1 : -1;
        }
        return candidate;
    }
};''',
        "typescript": '''function majorityElement(nums: number[]): number {
    let count = 0;
    let candidate = 0;
    for (const num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }
    return candidate;
}'''
    },
    171: {
        "title": "Excel Sheet Column Number",
        "slug": "excel-sheet-column-number",
        "url": "https://leetcode.com/problems/excel-sheet-column-number/",
        "python": '''class Solution:
    def titleToNumber(self, columnTitle: str) -> int:
        result = 0
        for char in columnTitle:
            result = result * 26 + (ord(char) - ord('A') + 1)
        return result''',
        "cpp": '''class Solution {
public:
    int titleToNumber(string columnTitle) {
        int result = 0;
        for (char c : columnTitle) {
            result = result * 26 + (c - 'A' + 1);
        }
        return result;
    }
};''',
        "typescript": '''function titleToNumber(columnTitle: string): number {
    let result = 0;
    for (const char of columnTitle) {
        result = result * 26 + (char.charCodeAt(0) - 65 + 1);
    }
    return result;
}'''
    },
    190: {
        "title": "Reverse Bits",
        "slug": "reverse-bits",
        "url": "https://leetcode.com/problems/reverse-bits/",
        "python": '''class Solution:
    def reverseBits(self, n: int) -> int:
        result = 0
        for i in range(32):
            result = (result << 1) | (n & 1)
            n >>= 1
        return result''',
        "cpp": '''class Solution {
public:
    uint32_t reverseBits(uint32_t n) {
        uint32_t result = 0;
        for (int i = 0; i < 32; i++) {
            result = (result << 1) | (n & 1);
            n >>= 1;
        }
        return result;
    }
};''',
        "typescript": '''function reverseBits(n: number): number {
    let result = 0;
    for (let i = 0; i < 32; i++) {
        result = (result << 1) | (n & 1);
        n >>>= 1;
    }
    return result >>> 0;
}'''
    },
    191: {
        "title": "Number of 1 Bits",
        "slug": "number-of-1-bits",
        "url": "https://leetcode.com/problems/number-of-1-bits/",
        "python": '''class Solution:
    def hammingWeight(self, n: int) -> int:
        count = 0
        while n:
            count += n & 1
            n >>= 1
        return count''',
        "cpp": '''class Solution {
public:
    int hammingWeight(uint32_t n) {
        int count = 0;
        while (n) {
            count += n & 1;
            n >>= 1;
        }
        return count;
    }
};''',
        "typescript": '''function hammingWeight(n: number): number {
    let count = 0;
    while (n) {
        count += n & 1;
        n >>>= 1;
    }
    return count;
}'''
    }
}
