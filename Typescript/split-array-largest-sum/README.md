# split array largest sum

## problem
given an integer array nums and an integer k, split nums into k non-empty subarrays such that the largest sum of any subarray is minimized. return the minimized largest sum.

a subarray is a contiguous part of the array.

## approach
this is solved using binary search on the possible maximum sum values:

### 1. search range determination
- minimum possible sum: largest single element in array
- maximum possible sum: sum of all elements
- we binary search in this range to find the minimum possible maximum sum

### 2. feasibility check
- for each mid value in binary search, check if we can split array into k subarrays
- where no subarray sum exceeds the mid value
- use greedy approach: keep adding numbers until sum would exceed mid, then start new subarray

### 3. binary search refinement
- if we can split into k subarrays with current mid, try smaller values (search left half)
- if we need more than k subarrays, try larger values (search right half)
- continue until we find the minimum possible maximum sum

## time complexity
- o(n log s) where n is array length and s is sum of all elements
- binary search takes log s iterations
- each feasibility check takes o(n) time

## space complexity
- o(1) excluding the input array
- only uses a few variables for tracking sums and subarray counts

## test cases covered
- standard case with mixed numbers and k=2
- sequential numbers requiring optimal split
- case where k equals array length (each element in separate subarray)

## example
```typescript
const nums = [7, 2, 5, 10, 8], k = 2;
// returns: 18
// explanation: split as [7,2,5] (sum=14) and [10,8] (sum=18), largest sum is 18
```
