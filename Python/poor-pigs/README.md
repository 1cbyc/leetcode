# poor pigs

## problem
there are buckets buckets of liquid, one of which is poisonous. there are also pigs available for testing. each pig can be used to test multiple buckets simultaneously, and the result will show after minutesToDie minutes if the pig dies or survives.

given buckets, minutesToDie, and minutesToTest, return the minimum number of pigs needed to figure out which bucket is poisonous within the allotted time.

## approach
this is solved using information theory and combinatorial mathematics:

### 1. states per pig calculation
- each pig can be in multiple states based on when it dies
- states = (minutesToTest // minutesToDie) + 1
- includes: survives entire test, or dies at different time intervals

### 2. combinatorial approach
- each pig can distinguish between 'states' possibilities
- with x pigs, we can test states^x combinations
- we need the smallest x such that states^x >= buckets

### 3. iterative solution
- start with 0 pigs
- increment pig count until states^pigs >= buckets
- return the minimum number of pigs required

## time complexity
- o(log n) where n is the number of buckets
- the while loop runs at most log_buckets iterations

## space complexity
- o(1) constant space usage

## test cases covered
- large number of buckets (1000) with extended testing time
- small number of buckets with minimal testing time
- small number of buckets with extended testing time

## example
```python
buckets = 1000, minutesToDie = 15, minutesToTest = 60
states_per_pig = (60 // 15) + 1
needed_pigs = 5
result = 5
```
