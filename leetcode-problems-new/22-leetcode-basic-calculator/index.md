---
title: "LeetCode 224: Basic Calculator - My Solution Walkthrough"
description: "Solving the Basic Calculator problem with a stack-based approach and operator precedence handling"
date: "2024-12-15"
draft: false
---

# LeetCode 224: Basic Calculator

i recently solved the basic calculator problem on leetcode, and i want to share my thought process and solution. this problem tests your understanding of parsing expressions, handling operator precedence, and managing parentheses.

## Problem Statement

Given a string `s` representing a valid expression, implement a basic calculator to evaluate it, and return the result of the evaluation.

**Note:** You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as `eval()`.

**Example:**
```
Input: s = "(1+(4+5+2)-3)+(6+8)"
Output: 23
```

## My Approach

when i first saw this problem, i immediately thought about using a stack-based approach. the key insight is that we need to handle:
1. **Operator precedence** - multiplication/division before addition/subtraction
2. **Parentheses** - which can change the order of operations
3. **Unary operators** - like negative signs

### Initial Thoughts

i started by thinking about how to parse the expression character by character. the main challenges i identified were:

1. **Handling multi-digit numbers** - We need to read consecutive digits as a single number
2. **Managing parentheses** - We need to evaluate expressions inside parentheses first
3. **Operator precedence** - We need to handle the order of operations correctly
4. **Sign handling** - We need to distinguish between subtraction and negative numbers

### Solution Strategy

i decided to use a **stack-based approach** with the following strategy:

1. **Use a stack to store numbers and operators**
2. **Process the expression from left to right**
3. **Handle parentheses by using recursion or a separate stack**
4. **Evaluate expressions as we go, maintaining operator precedence**

## My Solution

```python
def calculate(self, s: str) -> int:
    stack = []
    num = 0
    sign = 1
    result = 0
    
    for char in s:
        if char.isdigit():
            num = num * 10 + int(char)
        elif char == '+':
            result += sign * num
            num = 0
            sign = 1
        elif char == '-':
            result += sign * num
            num = 0
            sign = -1
        elif char == '(':
            stack.append(result)
            stack.append(sign)
            result = 0
            sign = 1
        elif char == ')':
            result += sign * num
            num = 0
            result *= stack.pop()  # sign
            result += stack.pop()  # previous result
    
    result += sign * num
    return result
```

## Code Breakdown

let me walk through how this solution works:

### 1. Variable Initialization
```python
stack = []      # Stack to store intermediate results and signs
num = 0         # Current number being built
sign = 1        # Current sign (1 for positive, -1 for negative)
result = 0      # Running result
```

### 2. Digit Processing
```python
if char.isdigit():
    num = num * 10 + int(char)
```
When we encounter a digit, we build the number by multiplying the current number by 10 and adding the new digit.

### 3. Operator Processing
```python
elif char == '+':
    result += sign * num
    num = 0
    sign = 1
elif char == '-':
    result += sign * num
    num = 0
    sign = -1
```
When we encounter an operator, we:
- Add the current number (with its sign) to the result
- Reset the number to 0
- Set the sign for the next number

### 4. Parentheses Handling
```python
elif char == '(':
    stack.append(result)
    stack.append(sign)
    result = 0
    sign = 1
elif char == ')':
    result += sign * num
    num = 0
    result *= stack.pop()  # sign
    result += stack.pop()  # previous result
```

**Opening parenthesis:** We save the current result and sign on the stack, then start fresh.

**Closing parenthesis:** We:
- Add the current number to the result
- Multiply by the saved sign
- Add the saved result

## Example Walkthrough

let's trace through the example: `"(1+(4+5+2)-3)+(6+8)"`

```
Initial: result=0, num=0, sign=1, stack=[]

1. '(': stack=[0,1], result=0, sign=1
2. '1': num=1
3. '+': result=1, num=0, sign=1
4. '(': stack=[0,1,1,1], result=0, sign=1
5. '4': num=4
6. '+': result=4, num=0, sign=1
7. '5': num=5
8. '+': result=9, num=0, sign=1
9. '2': num=2
10. ')': result=11, num=0, result=11*1+1=12
11. '-': result=12, num=0, sign=-1
12. '3': num=3
13. ')': result=9, num=0, result=9*1+0=9
14. '+': result=9, num=0, sign=1
15. '(': stack=[9,1], result=0, sign=1
16. '6': num=6
17. '+': result=6, num=0, sign=1
18. '8': num=8
19. ')': result=14, num=0, result=14*1+9=23

Final result: 23
```

## Time and Space Complexity

- **Time Complexity:** O(n) where n is the length of the string
- **Space Complexity:** O(n) for the stack in the worst case (when we have many nested parentheses)

## Key Insights

1. **Stack-based approach** is perfect for handling parentheses and maintaining state
2. **Sign handling** is crucial - we need to distinguish between subtraction and negative numbers
3. **Number building** requires accumulating digits until we hit an operator or parenthesis
4. **Parentheses** can be handled by saving and restoring state from the stack

## Alternative Approaches

i also considered a few other approaches:

1. **Recursive approach** - Parse the expression recursively, but this can be more complex
2. **Two-stack approach** - Separate stacks for numbers and operators
3. **Shunting yard algorithm** - Convert to postfix notation first

The stack-based approach I chose is clean, efficient, and easy to understand.

## Lessons Learned

this problem taught me:
- How to handle nested expressions with parentheses
- The importance of maintaining state during parsing
- How to distinguish between unary and binary operators
- The power of stack-based solutions for expression evaluation

## Conclusion

the basic calculator problem is a great exercise in expression parsing and stack manipulation. the key is understanding how to handle parentheses and operator precedence while maintaining a clean, readable solution.

you can find my complete solution on [leetcode](https://leetcode.com/problems/basic-calculator/solutions/6296161/i-solved-the-basic-calculator-problem-of-uf5n).

---

*this is part of my leetcode problem-solving series. i'm documenting my solutions to help others learn and to track my own progress.*

---

*This is part of my LeetCode problem-solving series. I'm documenting my solutions to help others learn and to track my own progress.* 