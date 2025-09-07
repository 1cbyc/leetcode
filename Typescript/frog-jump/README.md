# frog jump

## problem
a frog is crossing a river. the river is divided into some number of units, and at each unit there may or may not exist a stone. the frog can jump on a stone, but it must not jump into the water.

given a list of stones positions (in units) in sorted ascending order, determine if the frog can cross the river by landing on the last stone. initially, the frog is on the first stone and assume the first jump must be 1 unit.

if the frog's last jump was k units, then its next jumps can be either k - 1, k, or k + 1 units. note that the frog can only jump in the forward direction.

## approach
this is solved using depth-first search (dfs) with memoization to avoid redundant calculations:

### 1. base cases
- if there are no stones, return true
- if the second stone is not at position 1, return false (first jump must be 1)

### 2. dfs with state tracking
- track current position and last jump size
- use a set to store visited states (position + last jump) to avoid infinite loops
- at each position, try jumps of size lastJump-1, lastJump, lastJump+1
- if we reach the last stone, return true

### 3. optimization
- use a set for O(1) stone position lookups
- memoize visited states to prevent redundant exploration

## time complexity
- o(n) in best case with good memoization
- o(n^2) in worst case due to state space exploration
- where n is the number of stones

## space complexity
- o(n) for the stone set and visited states

## test cases covered
- basic frog jump sequence that should succeed
- sequence with gaps that should fail
- arithmetic progression that should succeed

## example
```typescript
const stones = [0, 1, 3, 5, 6, 8, 12, 17];
// returns: true
// explanation: the frog can jump 1->3(2), 3->5(2), 5->6(1), 6->8(2), 8->12(4), 12->17(5)
```
