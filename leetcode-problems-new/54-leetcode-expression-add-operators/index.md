---
title: "LeetCode 282: Expression Add Operators - PHP Backtracking Solution"
description: "Solving the Expression Add Operators problem using PHP with backtracking and multiplication precedence handling"
date: "2025-01-27"
draft: false
---

# LeetCode 282: Expression Add Operators

i recently solved the expression add operators problem on leetcode, and it's a great example of backtracking and string manipulation. this hard problem tests your understanding of recursive algorithms, operator precedence, and systematic problem exploration.

## Problem Statement

given a string num that contains only digits and an integer target, return all possibilities to insert the binary operators '+', '-', and/or '*' between the digits of num so that the resultant expression evaluates to the target value.

note that operands in the returned expressions should not contain leading zeros.

**example 1:**
```
input: num = "123", target = 6
output: ["1+2+3", "1*2*3"]
```

**example 2:**
```
input: num = "232", target = 8
output: ["2*3+2", "2+3*2"]
```

**example 3:**
```
input: num = "3456237490", target = 9191
output: []
```

## My Approach

when i first saw this problem, i immediately thought about using a backtracking approach. the key insight is that we need to try all possible combinations of operators while handling multiplication precedence correctly and avoiding invalid numbers with leading zeros.

### Initial Thoughts

i started by thinking about different approaches:
1. **backtracking approach** - try all operator combinations recursively
2. **iterative approach** - generate all possible expressions
3. **dynamic programming** - cache intermediate results

### Solution Strategy

i decided to use a **backtracking approach** with the following strategy:
1. **recursive exploration** - try all operator combinations
2. **multiplication precedence** - handle multiplication before addition/subtraction
3. **leading zero handling** - avoid invalid numbers
4. **expression building** - build expressions incrementally
5. **efficient evaluation** - calculate values during backtracking

## My Solution

```php
class solution {
    private $result = [];
    private $target;
    private $num;
    
    /**
     * @param string $num
     * @param integer $target
     * @return string[]
     */
    function addoperators($num, $target) {
        $this->target = $target;
        $this->num = $num;
        $this->result = [];
        
        if (strlen($num) == 0) {
            return $this->result;
        }
        
        $this->backtrack(0, "", 0, 0);
        return $this->result;
    }
    
    private function backtrack($index, $expr, $eval, $multed) {
        if ($index == strlen($this->num)) {
            if ($eval == $this->target) {
                $this->result[] = $expr;
            }
            return;
        }
        
        for ($i = $index; $i < strlen($this->num); $i++) {
            // skip leading zeros
            if ($i != $index && $this->num[$index] == '0') {
                break;
            }
            
            $curr = substr($this->num, $index, $i - $index + 1);
            $currval = intval($curr);
            
            if ($index == 0) {
                // first number, no operator needed
                $this->backtrack($i + 1, $curr, $currval, $currval);
            } else {
                // addition
                $this->backtrack($i + 1, $expr . "+" . $curr, $eval + $currval, $currval);
                
                // subtraction
                $this->backtrack($i + 1, $expr . "-" . $curr, $eval - $currval, -$currval);
                
                // multiplication
                $this->backtrack($i + 1, $expr . "*" . $curr, $eval - $multed + $multed * $currval, $multed * $currval);
            }
        }
    }
}
```

## Code Breakdown

let me walk through how this solution works:

### 1. Class Structure
```php
private $result = [];
private $target;
private $num;
```

we maintain class variables to:
- store valid expressions in `$result`
- track the target value
- store the input number string

### 2. Main Function
```php
function addoperators($num, $target) {
    $this->target = $target;
    $this->num = $num;
    $this->result = [];
    
    if (strlen($num) == 0) {
        return $this->result;
    }
    
    $this->backtrack(0, "", 0, 0);
    return $this->result;
}
```

the main function:
- initializes class variables
- handles empty input case
- starts backtracking from index 0
- returns all valid expressions

### 3. Backtracking Function
```php
private function backtrack($index, $expr, $eval, $multed) {
    if ($index == strlen($this->num)) {
        if ($eval == $this->target) {
            $this->result[] = $expr;
        }
        return;
    }
    
    for ($i = $index; $i < strlen($this->num); $i++) {
        // process current number
    }
}
```

parameters:
- `$index`: current position in the number string
- `$expr`: current expression being built
- `$eval`: current evaluation value
- `$multed`: last multiplied value for precedence handling

### 4. Leading Zero Handling
```php
if ($i != $index && $this->num[$index] == '0') {
    break;
}
```

we skip numbers with leading zeros:
- if current digit is '0' and we're not at the start
- prevents invalid numbers like "01", "02", etc.
- allows single "0" but not "01", "02", etc.

### 5. Operator Application
```php
// addition
$this->backtrack($i + 1, $expr . "+" . $curr, $eval + $currval, $currval);

// subtraction
$this->backtrack($i + 1, $expr . "-" . $curr, $eval - $currval, -$currval);

// multiplication
$this->backtrack($i + 1, $expr . "*" . $curr, $eval - $multed + $multed * $currval, $multed * $currval);
```

for each operator:
- **addition**: add current value to evaluation
- **subtraction**: subtract current value from evaluation
- **multiplication**: handle precedence by undoing last multiplication

## Example Walkthrough

let's trace through the example: num = "123", target = 6

```
initial call: backtrack(0, "", 0, 0)

index=0, i=0: curr="1", currval=1
- first number: backtrack(1, "1", 1, 1)

  index=1, i=1: curr="2", currval=2
  - addition: backtrack(2, "1+2", 3, 2)
    index=2, i=2: curr="3", currval=3
    - addition: backtrack(3, "1+2+3", 6, 3) -> valid!
    - subtraction: backtrack(3, "1+2-3", 0, -3)
    - multiplication: backtrack(3, "1+2*3", 3-2+2*3=7, 6)
  
  - subtraction: backtrack(2, "1-2", -1, -2)
    index=2, i=2: curr="3", currval=3
    - addition: backtrack(3, "1-2+3", 2, 3)
    - subtraction: backtrack(3, "1-2-3", -4, -3)
    - multiplication: backtrack(3, "1-2*3", -1-(-2)+(-2)*3=-5, -6)
  
  - multiplication: backtrack(2, "1*2", 2, 2)
    index=2, i=2: curr="3", currval=3
    - addition: backtrack(3, "1*2+3", 5, 3)
    - subtraction: backtrack(3, "1*2-3", -1, -3)
    - multiplication: backtrack(3, "1*2*3", 2-2+2*3=6, 6) -> valid!

result: ["1+2+3", "1*2*3"]
```

## Time and Space Complexity

- **time complexity:** O(4^n) where n is the length of the number string
- **space complexity:** O(n) for the recursion stack

the algorithm explores all possible operator combinations:
- for each position, we can add +, -, *, or no operator
- this gives us 4 choices per position
- total combinations: 4^(n-1)

## Key Insights

1. **multiplication precedence** - track last multiplied value to handle precedence correctly
2. **leading zeros** - avoid invalid numbers with leading zeros
3. **backtracking** - systematically explore all possible combinations
4. **efficient evaluation** - calculate values during backtracking instead of parsing expressions

## Alternative Approaches

i also considered:

1. **iterative approach** - generate all possible expressions first
   - more memory usage
   - harder to implement
   - same time complexity

2. **dynamic programming** - cache intermediate results
   - doesn't help much due to expression building
   - adds complexity without significant benefit
   - same asymptotic complexity

3. **expression parsing** - build expressions and parse them
   - more complex implementation
   - slower due to parsing overhead
   - harder to handle precedence

## Edge Cases to Consider

1. **empty string** - return empty array
2. **single digit** - handle numbers without operators
3. **leading zeros** - avoid invalid numbers like "01", "02"
4. **large numbers** - handle integer overflow
5. **no valid expressions** - return empty array
6. **target equals number** - single number without operators

## PHP-Specific Features

1. **string manipulation** - using substr() and strlen()
2. **type conversion** - intval() for string to integer conversion
3. **array operations** - push to result array
4. **class properties** - using private properties for state

## Lessons Learned

this problem taught me:
- **backtracking algorithms** - systematic exploration of all possibilities
- **operator precedence** - handling multiplication before addition/subtraction
- **string manipulation** - building expressions incrementally
- **edge case handling** - leading zeros and invalid expressions

## Real-World Applications

this problem has applications in:
- **calculator applications** - generating all possible expressions
- **mathematical software** - expression evaluation and generation
- **educational tools** - teaching operator precedence
- **code generation** - generating different code paths

## Conclusion

the expression add operators problem is an excellent exercise in backtracking and operator precedence handling. the key insight is using backtracking to explore all possible operator combinations while correctly handling multiplication precedence and avoiding invalid numbers.

you can find my complete solution on [leetcode](https://leetcode.com/problems/expression-add-operators/solutions/1234569/expression-add-operators-solution-by-1cbyc).

---

*this is part of my leetcode problem-solving series. i'm documenting my solutions to help others learn and to track my own progress.*
