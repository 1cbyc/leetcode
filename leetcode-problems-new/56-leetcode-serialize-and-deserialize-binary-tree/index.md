---
title: "LeetCode 297: Serialize and Deserialize Binary Tree - Rust Preorder Solution"
description: "Solving the Serialize and Deserialize Binary Tree problem using Rust with preorder traversal and null markers"
date: "2025-01-27"
draft: false
---

# LeetCode 297: Serialize and Deserialize Binary Tree

i recently solved the serialize and deserialize binary tree problem on leetcode, and it's a great example of tree traversal and memory management. this hard problem tests your understanding of binary trees, serialization techniques, and efficient data structure implementation.

## Problem Statement

serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

design an algorithm to serialize and deserialize a binary tree. there is no restriction on how your serialization/deserialization algorithm should work. you just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.

**example:**
```
input: root = [1,2,3,null,null,4,5]
output: [1,2,3,null,null,4,5]
```

## My Approach

when i first saw this problem, i immediately thought about using a preorder traversal approach. the key insight is that we can use a simple string format with null markers to represent the tree structure, and then reconstruct it using the same traversal order.

### Initial Thoughts

i started by thinking about different approaches:
1. **preorder traversal** - serialize root, left, right with null markers
2. **level order traversal** - serialize level by level
3. **inorder + preorder** - use two traversals for reconstruction

### Solution Strategy

i decided to use a **preorder traversal approach** with the following strategy:
1. **serialization** - use preorder traversal with "#" for null nodes
2. **deserialization** - reconstruct tree from serialized string
3. **memory management** - handle rust's ownership system properly
4. **string processing** - efficient string parsing and building

## My Solution

```rust
use std::rc::Rc;
use std::cell::RefCell;

struct codec;

impl codec {
    fn new() -> Self {
        codec
    }

    fn serialize(&self, root: Option<Rc<RefCell<TreeNode>>>) -> String {
        let mut result = String::new();
        self.serialize_helper(root, &mut result);
        result
    }

    fn serialize_helper(&self, node: Option<Rc<RefCell<TreeNode>>>, result: &mut String) {
        match node {
            None => {
                result.push_str("#,");
            }
            Some(node_ref) => {
                let node = node_ref.borrow();
                result.push_str(&node.val.to_string());
                result.push(',');
                self.serialize_helper(node.left.clone(), result);
                self.serialize_helper(node.right.clone(), result);
            }
        }
    }

    fn deserialize(&self, data: String) -> Option<Rc<RefCell<TreeNode>>> {
        let mut iter = data.split(',').peekable();
        self.deserialize_helper(&mut iter)
    }

    fn deserialize_helper(&self, iter: &mut std::iter::Peekable<std::str::Split<char>>) -> Option<Rc<RefCell<TreeNode>>> {
        if let Some(&val_str) = iter.peek() {
            if val_str == "#" {
                iter.next();
                return None;
            }
            
            if let Ok(val) = val_str.parse::<i32>() {
                iter.next();
                let mut node = TreeNode::new(val);
                node.left = self.deserialize_helper(iter);
                node.right = self.deserialize_helper(iter);
                return Some(Rc::new(RefCell::new(node)));
            }
        }
        None
    }
}

impl solution {
    fn serialize(root: Option<Rc<RefCell<TreeNode>>>) -> String {
        let codec = codec::new();
        codec.serialize(root)
    }

    fn deserialize(data: String) -> Option<Rc<RefCell<TreeNode>>> {
        let codec = codec::new();
        codec.deserialize(data)
    }
}
```

## Code Breakdown

let me walk through how this solution works:

### 1. Tree Node Structure
```rust
#[derive(Debug, PartialEq, Eq)]
pub struct treenode {
    pub val: i32,
    pub left: Option<Rc<RefCell<TreeNode>>>,
    pub right: Option<Rc<RefCell<TreeNode>>>,
}
```

we define the tree node with:
- **val**: integer value
- **left/right**: optional references to child nodes
- **Rc<RefCell<>>**: shared ownership with interior mutability

### 2. Serialization Process
```rust
fn serialize(&self, root: Option<Rc<RefCell<TreeNode>>>) -> String {
    let mut result = String::new();
    self.serialize_helper(root, &mut result);
    result
}
```

the serialization process:
- start with empty string
- use helper function for recursive traversal
- build string incrementally

### 3. Serialization Helper
```rust
fn serialize_helper(&self, node: Option<Rc<RefCell<TreeNode>>>, result: &mut String) {
    match node {
        None => {
            result.push_str("#,");
        }
        Some(node_ref) => {
            let node = node_ref.borrow();
            result.push_str(&node.val.to_string());
            result.push(',');
            self.serialize_helper(node.left.clone(), result);
            self.serialize_helper(node.right.clone(), result);
        }
    }
}
```

recursive serialization logic:
- **null node**: add "#," to string
- **valid node**: add value, comma, then recurse on children
- **preorder**: root, left, right

### 4. Deserialization Process
```rust
fn deserialize(&self, data: String) -> Option<Rc<RefCell<TreeNode>>> {
    let mut iter = data.split(',').peekable();
    self.deserialize_helper(&mut iter)
}
```

deserialization setup:
- split string by commas
- use peekable iterator for efficient parsing
- call helper function for reconstruction

### 5. Deserialization Helper
```rust
fn deserialize_helper(&self, iter: &mut std::iter::Peekable<std::str::Split<char>>) -> Option<Rc<RefCell<TreeNode>>> {
    if let Some(&val_str) = iter.peek() {
        if val_str == "#" {
            iter.next();
            return None;
        }
        
        if let Ok(val) = val_str.parse::<i32>() {
            iter.next();
            let mut node = treenode::new(val);
            node.left = self.deserialize_helper(iter);
            node.right = self.deserialize_helper(iter);
            return Some(Rc::new(RefCell::new(node)));
        }
    }
    None
}
```

reconstruction logic:
- **peek at next value** without consuming
- **null marker**: consume and return None
- **valid value**: parse, create node, recurse on children
- **preorder reconstruction**: matches serialization order

## Example Walkthrough

let's trace through the example: [1,2,3,null,null,4,5]

```
tree structure:
    1
   / \
  2   3
     / \
    4   5

serialization:
- visit 1: "1,"
- visit 2: "1,2,"
- visit null (left of 2): "1,2,#,"
- visit null (right of 2): "1,2,#,#,"
- visit 3: "1,2,#,#,3,"
- visit 4: "1,2,#,#,3,4,"
- visit null (left of 4): "1,2,#,#,3,4,#,"
- visit null (right of 4): "1,2,#,#,3,4,#,#,"
- visit 5: "1,2,#,#,3,4,#,#,5,"
- visit null (left of 5): "1,2,#,#,3,4,#,#,5,#,"
- visit null (right of 5): "1,2,#,#,3,4,#,#,5,#,#,"

final result: "1,2,#,#,3,4,#,#,5,#,#,"

deserialization:
- parse "1": create node(1)
- parse "2": create node(2) as left child
- parse "#": left child of node(2) is null
- parse "#": right child of node(2) is null
- parse "3": create node(3) as right child
- parse "4": create node(4) as left child of node(3)
- parse "#": left child of node(4) is null
- parse "#": right child of node(4) is null
- parse "5": create node(5) as right child of node(3)
- parse "#": left child of node(5) is null
- parse "#": right child of node(5) is null

reconstructed tree matches original structure
```

## Time and Space Complexity

- **time complexity:** O(n) for both serialization and deserialization
- **space complexity:** O(n) for the serialized string and recursion stack

the algorithm is efficient because:
- we visit each node exactly once during serialization
- we parse each token exactly once during deserialization
- string operations are linear in the number of nodes

## Key Insights

1. **preorder traversal** - preserves tree structure for reconstruction
2. **null markers** - handle missing nodes in serialization
3. **rust ownership** - use Rc<RefCell<>> for shared mutable ownership
4. **iterator parsing** - efficient string parsing with peekable iterator

## Alternative Approaches

i also considered:

1. **level order traversal** - serialize level by level
   - more complex implementation
   - handles complete trees well
   - same time complexity

2. **inorder + preorder** - use two traversals
   - requires more storage
   - more complex reconstruction
   - overkill for this problem

3. **json format** - use structured format
   - more readable
   - larger storage overhead
   - slower parsing

## Edge Cases to Consider

1. **empty tree** - handle null root
2. **single node** - serialize and deserialize correctly
3. **unbalanced trees** - handle deep or wide trees
4. **duplicate values** - handle repeated node values
5. **large trees** - handle memory efficiently
6. **malformed input** - handle invalid serialized strings

## Rust-Specific Features

1. **ownership system** - Rc<RefCell<>> for shared mutable ownership
2. **pattern matching** - match expressions for null handling
3. **iterator traits** - peekable iterator for efficient parsing
4. **error handling** - Result types for parsing operations
5. **memory safety** - compile-time guarantees for memory management

## Lessons Learned

this problem taught me:
- **tree serialization** - converting trees to strings efficiently
- **rust ownership** - handling shared mutable state
- **iterator patterns** - efficient string parsing
- **recursive algorithms** - tree traversal and reconstruction

## Real-World Applications

this problem has applications in:
- **data persistence** - saving tree structures to files
- **network transmission** - sending tree data over networks
- **caching systems** - serializing tree caches
- **configuration storage** - saving hierarchical configurations

## Conclusion

the serialize and deserialize binary tree problem is an excellent exercise in tree traversal and memory management. the key insight is using preorder traversal with null markers to create a simple yet efficient serialization format that can be easily reconstructed.

you can find my complete solution on [leetcode](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/solutions/1234569/serialize-and-deserialize-binary-tree-solution-by-1cbyc).

---

*this is part of my leetcode problem-solving series. i'm documenting my solutions to help others learn and to track my own progress.*
