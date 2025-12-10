---
title: "LeetCode 2: Add Two Numbers - Linked List Manipulation"
description: "Solving the Add Two Numbers problem using linked list traversal and carry handling"
date: "2024-11-12"
draft: false
---

# LeetCode 2: Add Two Numbers

i recently solved the add two numbers problem on leetcode, and it's a great example of linked list manipulation and digit-by-digit arithmetic. this problem tests your understanding of linked lists, carry handling, and edge cases.

## Problem Statement

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

**Example:**
```
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807
```

## My Approach

when i first saw this problem, i immediately thought about simulating the manual addition process we learned in school. the key insight is to process both linked lists digit by digit, handling carry at each step.

### Initial Thoughts

i started by thinking about the manual addition process:
1. **start from least significant digit** - which is the head of both lists
2. **add corresponding digits** - along with any carry from previous step
3. **handle carry** - if sum >= 10, carry 1 to next position
4. **create result list** - build the result as we go

### Solution Strategy

i decided to use a **dummy head approach** with the following strategy:
1. **create dummy head** - for easier result list construction
2. **traverse both lists** - simultaneously while they have nodes
3. **handle carry** - maintain carry throughout the process
4. **handle remaining digits** - if one list is longer than the other
5. **handle final carry** - if there's a carry at the end

## My Solution

```python
def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
    # dummy head for result list
    dummy = ListNode(0)
    current = dummy
    carry = 0
    
    # traverse both lists
    while l1 or l2 or carry:
        # get values from lists (0 if list is exhausted)
        val1 = l1.val if l1 else 0
        val2 = l2.val if l2 else 0
        
        # calculate sum and new carry
        total = val1 + val2 + carry
        carry = total // 10
        digit = total % 10
        
        # create new node and move to next
        current.next = ListNode(digit)
        current = current.next
        
        # move to next nodes in input lists
        if l1:
            l1 = l1.next
        if l2:
            l2 = l2.next
    
    return dummy.next
```

## Code Breakdown

let me walk through how this solution works:

### 1. Dummy Head Setup
```python
dummy = ListNode(0)
current = dummy
carry = 0
```

we create a dummy head to simplify result list construction and initialize carry to 0.

### 2. Main Loop
```python
while l1 or l2 or carry:
```

continue while either list has nodes OR there's a carry to process.

### 3. Digit Extraction
```python
val1 = l1.val if l1 else 0
val2 = l2.val if l2 else 0
```

get current digits from both lists, using 0 if a list is exhausted.

### 4. Sum and Carry Calculation
```python
total = val1 + val2 + carry
carry = total // 10
digit = total % 10
```

calculate total sum, new carry, and current digit.

### 5. Result Construction
```python
current.next = ListNode(digit)
current = current.next
```

create new node with current digit and move to next position.

## Example Walkthrough

let's trace through the example: `l1 = [2,4,3], l2 = [5,6,4]`

```
iteration 1: val1=2, val2=5, carry=0
- total = 2 + 5 + 0 = 7
- carry = 7 // 10 = 0
- digit = 7 % 10 = 7
- result: [7]

iteration 2: val1=4, val2=6, carry=0
- total = 4 + 6 + 0 = 10
- carry = 10 // 10 = 1
- digit = 10 % 10 = 0
- result: [7,0]

iteration 3: val1=3, val2=4, carry=1
- total = 3 + 4 + 1 = 8
- carry = 8 // 10 = 0
- digit = 8 % 10 = 8
- result: [7,0,8]

final result: [7,0,8] (which is 807 in reverse)
```

## Time and Space Complexity

- **time complexity:** O(max(m,n)) - where m,n are lengths of input lists
- **space complexity:** O(max(m,n)) - for the result list

## Key Insights

1. **dummy head** - simplifies result list construction
2. **carry handling** - crucial for correct arithmetic
3. **list exhaustion** - handle when one list is longer than the other
4. **final carry** - don't forget to handle carry at the end

## Alternative Approaches

i also considered:

1. **convert to numbers** - convert lists to integers, add, then convert back
   - problem: might overflow for large numbers
   - not recommended for production

2. **reverse lists first** - reverse both lists, add, then reverse result
   - more complex and unnecessary

the dummy head approach is clean and efficient.

## Edge Cases to Consider

1. **different lengths** - one list longer than the other
2. **final carry** - carry at the most significant digit
3. **empty lists** - should handle gracefully
4. **single digit** - lists with only one node each
5. **large numbers** - should handle without overflow

## Lessons Learned

this problem taught me:
- how to manipulate linked lists efficiently
- the importance of carry handling in arithmetic
- using dummy heads for cleaner code
- handling edge cases in linked list problems

## Conclusion

the add two numbers problem is a great exercise in linked list manipulation and arithmetic. the key is simulating manual addition while handling carry properly.

you can find my complete solution on [leetcode](https://leetcode.com/problems/add-two-numbers/solutions/1234568/add-two-numbers-linked-list-solution-by-1cbyc).

---

*this is part of my leetcode problem-solving series. i'm documenting my solutions to help others learn and to track my own progress.* 