"""
LeetCode Easy Problems - Solutions Batch 1 (Problems 1-100)
Languages: Python, C++, TypeScript
"""

SOLUTIONS = {

# ============================================================
# 1. Two Sum
# ============================================================
1: {
    "title": "Two Sum",
    "slug": "two-sum",
    "python": '''
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        seen = {}
        for i, n in enumerate(nums):
            diff = target - n
            if diff in seen:
                return [seen[diff], i]
            seen[n] = i
        return []
''',
    "cpp": '''
class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        unordered_map<int,int> seen;
        for (int i = 0; i < nums.size(); i++) {
            int diff = target - nums[i];
            if (seen.count(diff)) return {seen[diff], i};
            seen[nums[i]] = i;
        }
        return {};
    }
};
''',
    "typescript": '''
function twoSum(nums: number[], target: number): number[] {
    const seen = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        if (seen.has(diff)) return [seen.get(diff)!, i];
        seen.set(nums[i], i);
    }
    return [];
}
'''
},

# ============================================================
# 7. Reverse Integer
# ============================================================
7: {
    "title": "Reverse Integer",
    "slug": "reverse-integer",
    "python": '''
class Solution:
    def reverse(self, x: int) -> int:
        sign = -1 if x < 0 else 1
        rev = int(str(abs(x))[::-1]) * sign
        return rev if -(2**31) <= rev <= 2**31 - 1 else 0
''',
    "cpp": '''
class Solution {
public:
    int reverse(int x) {
        long rev = 0;
        while (x != 0) {
            rev = rev * 10 + x % 10;
            x /= 10;
        }
        return (rev < INT_MIN || rev > INT_MAX) ? 0 : rev;
    }
};
''',
    "typescript": '''
function reverse(x: number): number {
    const sign = x < 0 ? -1 : 1;
    const rev = parseInt(Math.abs(x).toString().split('').reverse().join('')) * sign;
    return rev < -(2**31) || rev > 2**31 - 1 ? 0 : rev;
}
'''
},

# ============================================================
# 9. Palindrome Number
# ============================================================
9: {
    "title": "Palindrome Number",
    "slug": "palindrome-number",
    "python": '''
class Solution:
    def isPalindrome(self, x: int) -> bool:
        if x < 0: return False
        s = str(x)
        return s == s[::-1]
''',
    "cpp": '''
class Solution {
public:
    bool isPalindrome(int x) {
        if (x < 0) return false;
        string s = to_string(x);
        string r = s; reverse(r.begin(), r.end());
        return s == r;
    }
};
''',
    "typescript": '''
function isPalindrome(x: number): boolean {
    if (x < 0) return false;
    const s = x.toString();
    return s === s.split('').reverse().join('');
}
'''
},

# ============================================================
# 13. Roman to Integer
# ============================================================
13: {
    "title": "Roman to Integer",
    "slug": "roman-to-integer",
    "python": '''
class Solution:
    def romanToInt(self, s: str) -> int:
        vals = {'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000}
        res = 0
        for i in range(len(s)):
            if i+1 < len(s) and vals[s[i]] < vals[s[i+1]]:
                res -= vals[s[i]]
            else:
                res += vals[s[i]]
        return res
''',
    "cpp": '''
class Solution {
public:
    int romanToInt(string s) {
        unordered_map<char,int> vals={{'I',1},{'V',5},{'X',10},{'L',50},{'C',100},{'D',500},{'M',1000}};
        int res = 0;
        for (int i = 0; i < s.size(); i++) {
            if (i+1 < s.size() && vals[s[i]] < vals[s[i+1]]) res -= vals[s[i]];
            else res += vals[s[i]];
        }
        return res;
    }
};
''',
    "typescript": '''
function romanToInt(s: string): number {
    const vals: {[k:string]:number} = {I:1,V:5,X:10,L:50,C:100,D:500,M:1000};
    let res = 0;
    for (let i = 0; i < s.length; i++) {
        if (i+1 < s.length && vals[s[i]] < vals[s[i+1]]) res -= vals[s[i]];
        else res += vals[s[i]];
    }
    return res;
}
'''
},

# ============================================================
# 14. Longest Common Prefix
# ============================================================
14: {
    "title": "Longest Common Prefix",
    "slug": "longest-common-prefix",
    "python": '''
class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        if not strs: return ""
        prefix = strs[0]
        for s in strs[1:]:
            while not s.startswith(prefix):
                prefix = prefix[:-1]
                if not prefix: return ""
        return prefix
''',
    "cpp": '''
class Solution {
public:
    string longestCommonPrefix(vector<string>& strs) {
        if (strs.empty()) return "";
        string prefix = strs[0];
        for (auto& s : strs) {
            while (s.find(prefix) != 0) {
                prefix = prefix.substr(0, prefix.size()-1);
                if (prefix.empty()) return "";
            }
        }
        return prefix;
    }
};
''',
    "typescript": '''
function longestCommonPrefix(strs: string[]): string {
    if (!strs.length) return "";
    let prefix = strs[0];
    for (const s of strs) {
        while (!s.startsWith(prefix)) {
            prefix = prefix.slice(0, -1);
            if (!prefix) return "";
        }
    }
    return prefix;
}
'''
},

# ============================================================
# 20. Valid Parentheses
# ============================================================
20: {
    "title": "Valid Parentheses",
    "slug": "valid-parentheses",
    "python": '''
class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        pairs = {')':'(', ']':'[', '}':'{'}
        for c in s:
            if c in '([{': stack.append(c)
            elif not stack or stack[-1] != pairs[c]: return False
            else: stack.pop()
        return not stack
''',
    "cpp": '''
class Solution {
public:
    bool isValid(string s) {
        stack<char> st;
        for (char c : s) {
            if (c=='(' || c=='[' || c=='{') st.push(c);
            else {
                if (st.empty()) return false;
                if (c==')' && st.top()!='(') return false;
                if (c==']' && st.top()!='[') return false;
                if (c=='}' && st.top()!='{') return false;
                st.pop();
            }
        }
        return st.empty();
    }
};
''',
    "typescript": '''
function isValid(s: string): boolean {
    const stack: string[] = [];
    const pairs: {[k:string]:string} = {')':'(', ']':'[', '}':'{'};
    for (const c of s) {
        if ('([{'.includes(c)) stack.push(c);
        else if (!stack.length || stack[stack.length-1] !== pairs[c]) return false;
        else stack.pop();
    }
    return stack.length === 0;
}
'''
},

# ============================================================
# 21. Merge Two Sorted Lists
# ============================================================
21: {
    "title": "Merge Two Sorted Lists",
    "slug": "merge-two-sorted-lists",
    "python": '''
class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        dummy = ListNode()
        cur = dummy
        while list1 and list2:
            if list1.val <= list2.val:
                cur.next = list1; list1 = list1.next
            else:
                cur.next = list2; list2 = list2.next
            cur = cur.next
        cur.next = list1 or list2
        return dummy.next
''',
    "cpp": '''
class Solution {
public:
    ListNode* mergeTwoLists(ListNode* l1, ListNode* l2) {
        ListNode dummy; ListNode* cur = &dummy;
        while (l1 && l2) {
            if (l1->val <= l2->val) { cur->next = l1; l1 = l1->next; }
            else { cur->next = l2; l2 = l2->next; }
            cur = cur->next;
        }
        cur->next = l1 ? l1 : l2;
        return dummy.next;
    }
};
''',
    "typescript": '''
function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    const dummy = new ListNode();
    let cur = dummy;
    while (list1 && list2) {
        if (list1.val <= list2.val) { cur.next = list1; list1 = list1.next; }
        else { cur.next = list2; list2 = list2.next; }
        cur = cur.next!;
    }
    cur.next = list1 ?? list2;
    return dummy.next;
}
'''
},

# ============================================================
# 26. Remove Duplicates from Sorted Array
# ============================================================
26: {
    "title": "Remove Duplicates from Sorted Array",
    "slug": "remove-duplicates-from-sorted-array",
    "python": '''
class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        k = 1
        for i in range(1, len(nums)):
            if nums[i] != nums[i-1]:
                nums[k] = nums[i]; k += 1
        return k
''',
    "cpp": '''
class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
        int k = 1;
        for (int i = 1; i < nums.size(); i++)
            if (nums[i] != nums[i-1]) nums[k++] = nums[i];
        return k;
    }
};
''',
    "typescript": '''
function removeDuplicates(nums: number[]): number {
    let k = 1;
    for (let i = 1; i < nums.length; i++)
        if (nums[i] !== nums[i-1]) nums[k++] = nums[i];
    return k;
}
'''
},

# ============================================================
# 27. Remove Element
# ============================================================
27: {
    "title": "Remove Element",
    "slug": "remove-element",
    "python": '''
class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        k = 0
        for n in nums:
            if n != val:
                nums[k] = n; k += 1
        return k
''',
    "cpp": '''
class Solution {
public:
    int removeElement(vector<int>& nums, int val) {
        int k = 0;
        for (int n : nums) if (n != val) nums[k++] = n;
        return k;
    }
};
''',
    "typescript": '''
function removeElement(nums: number[], val: number): number {
    let k = 0;
    for (const n of nums) if (n !== val) nums[k++] = n;
    return k;
}
'''
},

# ============================================================
# 28. Find the Index of the First Occurrence in a String
# ============================================================
28: {
    "title": "Find the Index of the First Occurrence in a String",
    "slug": "find-the-index-of-the-first-occurrence-in-a-string",
    "python": '''
class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        return haystack.find(needle)
''',
    "cpp": '''
class Solution {
public:
    int strStr(string haystack, string needle) {
        size_t pos = haystack.find(needle);
        return pos == string::npos ? -1 : pos;
    }
};
''',
    "typescript": '''
function strStr(haystack: string, needle: string): number {
    return haystack.indexOf(needle);
}
'''
},

# ============================================================
# 35. Search Insert Position
# ============================================================
35: {
    "title": "Search Insert Position",
    "slug": "search-insert-position",
    "python": '''
class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        lo, hi = 0, len(nums)
        while lo < hi:
            mid = (lo + hi) // 2
            if nums[mid] < target: lo = mid + 1
            else: hi = mid
        return lo
''',
    "cpp": '''
class Solution {
public:
    int searchInsert(vector<int>& nums, int target) {
        int lo = 0, hi = nums.size();
        while (lo < hi) {
            int mid = (lo+hi)/2;
            if (nums[mid] < target) lo = mid+1;
            else hi = mid;
        }
        return lo;
    }
};
''',
    "typescript": '''
function searchInsert(nums: number[], target: number): number {
    let lo = 0, hi = nums.length;
    while (lo < hi) {
        const mid = (lo + hi) >> 1;
        if (nums[mid] < target) lo = mid + 1;
        else hi = mid;
    }
    return lo;
}
'''
},

# ============================================================
# 58. Length of Last Word
# ============================================================
58: {
    "title": "Length of Last Word",
    "slug": "length-of-last-word",
    "python": '''
class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        return len(s.rstrip().split()[-1])
''',
    "cpp": '''
class Solution {
public:
    int lengthOfLastWord(string s) {
        int len = 0, i = s.size()-1;
        while (i >= 0 && s[i] == ' ') i--;
        while (i >= 0 && s[i] != ' ') { len++; i--; }
        return len;
    }
};
''',
    "typescript": '''
function lengthOfLastWord(s: string): number {
    return s.trimEnd().split(' ').pop()!.length;
}
'''
},

# ============================================================
# 66. Plus One
# ============================================================
66: {
    "title": "Plus One",
    "slug": "plus-one",
    "python": '''
class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        for i in range(len(digits)-1, -1, -1):
            if digits[i] < 9:
                digits[i] += 1
                return digits
            digits[i] = 0
        return [1] + digits
''',
    "cpp": '''
class Solution {
public:
    vector<int> plusOne(vector<int>& digits) {
        for (int i = digits.size()-1; i >= 0; i--) {
            if (digits[i] < 9) { digits[i]++; return digits; }
            digits[i] = 0;
        }
        digits.insert(digits.begin(), 1);
        return digits;
    }
};
''',
    "typescript": '''
function plusOne(digits: number[]): number[] {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) { digits[i]++; return digits; }
        digits[i] = 0;
    }
    return [1, ...digits];
}
'''
},

# ============================================================
# 67. Add Binary
# ============================================================
67: {
    "title": "Add Binary",
    "slug": "add-binary",
    "python": '''
class Solution:
    def addBinary(self, a: str, b: str) -> str:
        return bin(int(a, 2) + int(b, 2))[2:]
''',
    "cpp": '''
class Solution {
public:
    string addBinary(string a, string b) {
        string res = "";
        int carry = 0, i = a.size()-1, j = b.size()-1;
        while (i >= 0 || j >= 0 || carry) {
            int sum = carry;
            if (i >= 0) sum += a[i--] - '0';
            if (j >= 0) sum += b[j--] - '0';
            res = char('0' + sum%2) + res;
            carry = sum / 2;
        }
        return res.empty() ? "0" : res;
    }
};
''',
    "typescript": '''
function addBinary(a: string, b: string): string {
    return (BigInt('0b' + a) + BigInt('0b' + b)).toString(2);
}
'''
},

# ============================================================
# 69. Sqrt(x)
# ============================================================
69: {
    "title": "Sqrt(x)",
    "slug": "sqrtx",
    "python": '''
class Solution:
    def mySqrt(self, x: int) -> int:
        lo, hi = 0, x
        while lo <= hi:
            mid = (lo + hi) // 2
            if mid * mid <= x < (mid+1)*(mid+1):
                return mid
            elif mid * mid > x:
                hi = mid - 1
            else:
                lo = mid + 1
        return 0
''',
    "cpp": '''
class Solution {
public:
    int mySqrt(int x) {
        long lo = 0, hi = x;
        while (lo <= hi) {
            long mid = (lo+hi)/2;
            if (mid*mid == x) return mid;
            else if (mid*mid < x) lo = mid+1;
            else hi = mid-1;
        }
        return hi;
    }
};
''',
    "typescript": '''
function mySqrt(x: number): number {
    let lo = 0, hi = x;
    while (lo <= hi) {
        const mid = Math.floor((lo + hi) / 2);
        if (mid * mid === x) return mid;
        else if (mid * mid < x) lo = mid + 1;
        else hi = mid - 1;
    }
    return hi;
}
'''
},

# ============================================================
# 70. Climbing Stairs
# ============================================================
70: {
    "title": "Climbing Stairs",
    "slug": "climbing-stairs",
    "python": '''
class Solution:
    def climbStairs(self, n: int) -> int:
        a, b = 1, 1
        for _ in range(n-1):
            a, b = b, a+b
        return b
''',
    "cpp": '''
class Solution {
public:
    int climbStairs(int n) {
        int a = 1, b = 1;
        for (int i = 1; i < n; i++) { int c = a+b; a = b; b = c; }
        return b;
    }
};
''',
    "typescript": '''
function climbStairs(n: number): number {
    let a = 1, b = 1;
    for (let i = 1; i < n; i++) [a, b] = [b, a + b];
    return b;
}
'''
},

# ============================================================
# 83. Remove Duplicates from Sorted List
# ============================================================
83: {
    "title": "Remove Duplicates from Sorted List",
    "slug": "remove-duplicates-from-sorted-list",
    "python": '''
class Solution:
    def deleteDuplicates(self, head: Optional[ListNode]) -> Optional[ListNode]:
        cur = head
        while cur and cur.next:
            if cur.val == cur.next.val:
                cur.next = cur.next.next
            else:
                cur = cur.next
        return head
''',
    "cpp": '''
class Solution {
public:
    ListNode* deleteDuplicates(ListNode* head) {
        ListNode* cur = head;
        while (cur && cur->next) {
            if (cur->val == cur->next->val) cur->next = cur->next->next;
            else cur = cur->next;
        }
        return head;
    }
};
''',
    "typescript": '''
function deleteDuplicates(head: ListNode | null): ListNode | null {
    let cur = head;
    while (cur && cur.next) {
        if (cur.val === cur.next.val) cur.next = cur.next.next;
        else cur = cur.next;
    }
    return head;
}
'''
},

# ============================================================
# 88. Merge Sorted Array
# ============================================================
88: {
    "title": "Merge Sorted Array",
    "slug": "merge-sorted-array",
    "python": '''
class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        i, j, k = m-1, n-1, m+n-1
        while i >= 0 and j >= 0:
            if nums1[i] > nums2[j]:
                nums1[k] = nums1[i]; i -= 1
            else:
                nums1[k] = nums2[j]; j -= 1
            k -= 1
        nums1[:j+1] = nums2[:j+1]
''',
    "cpp": '''
class Solution {
public:
    void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {
        int i = m-1, j = n-1, k = m+n-1;
        while (i >= 0 && j >= 0)
            nums1[k--] = nums1[i] > nums2[j] ? nums1[i--] : nums2[j--];
        while (j >= 0) nums1[k--] = nums2[j--];
    }
};
''',
    "typescript": '''
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let i = m-1, j = n-1, k = m+n-1;
    while (i >= 0 && j >= 0)
        nums1[k--] = nums1[i] > nums2[j] ? nums1[i--] : nums2[j--];
    while (j >= 0) nums1[k--] = nums2[j--];
}
'''
},

# ============================================================
# 94. Binary Tree Inorder Traversal
# ============================================================
94: {
    "title": "Binary Tree Inorder Traversal",
    "slug": "binary-tree-inorder-traversal",
    "python": '''
class Solution:
    def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        res = []
        def dfs(node):
            if not node: return
            dfs(node.left); res.append(node.val); dfs(node.right)
        dfs(root)
        return res
''',
    "cpp": '''
class Solution {
public:
    vector<int> inorderTraversal(TreeNode* root) {
        vector<int> res;
        function<void(TreeNode*)> dfs = [&](TreeNode* node) {
            if (!node) return;
            dfs(node->left); res.push_back(node->val); dfs(node->right);
        };
        dfs(root);
        return res;
    }
};
''',
    "typescript": '''
function inorderTraversal(root: TreeNode | null): number[] {
    const res: number[] = [];
    const dfs = (node: TreeNode | null) => {
        if (!node) return;
        dfs(node.left); res.push(node.val); dfs(node.right);
    };
    dfs(root);
    return res;
}
'''
},

# ============================================================
# 100. Same Tree
# ============================================================
100: {
    "title": "Same Tree",
    "slug": "same-tree",
    "python": '''
class Solution:
    def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:
        if not p and not q: return True
        if not p or not q or p.val != q.val: return False
        return self.isSameTree(p.left, q.left) and self.isSameTree(p.right, q.right)
''',
    "cpp": '''
class Solution {
public:
    bool isSameTree(TreeNode* p, TreeNode* q) {
        if (!p && !q) return true;
        if (!p || !q || p->val != q->val) return false;
        return isSameTree(p->left, q->left) && isSameTree(p->right, q->right);
    }
};
''',
    "typescript": '''
function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    if (!p && !q) return true;
    if (!p || !q || p.val !== q.val) return false;
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}
'''
},

}
