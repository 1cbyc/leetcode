# perfect rectangle

## problem
given an array of rectangles where each rectangle is represented as `[x1, y1, x2, y2]` representing the bottom-left and top-right coordinates, determine if all rectangles together form an exact cover of a rectangular region without overlaps or gaps.

## approach
this is solved using a mathematical approach with the following key insights:

### 1. area check
- calculate total area of all rectangles
- calculate area of bounding box (min_x to max_x, min_y to max_y)
- if areas don't match, return false

### 2. corner point analysis
- track all corner points of rectangles and their frequencies
- the four corners of the overall bounding rectangle should appear exactly once
- all other intersection points should appear an even number of times (2 or 4)

### 3. conditions for perfect rectangle
- total area = bounding box area (no gaps)
- corner multiplicities are correct (no overlaps)
- all rectangles fit exactly within the bounding box

## time complexity
- o(n) where n is the number of rectangles
- we process each rectangle once and check corner points

## space complexity
- o(n) for storing corner point frequencies

## test cases covered
- perfect 2x2 grid formed by 4 rectangles
- single rectangle
- overlapping rectangles (should return false)
- rectangles with gaps (should return false)
- l-shaped arrangement forming perfect rectangle
- empty input (should return false)

## example
```python
# perfect rectangle: 2x2 grid
rectangles = [
    [1, 1, 2, 2],  # bottom-left
    [1, 2, 2, 3],  # top-left
    [2, 1, 3, 2],  # bottom-right
    [2, 2, 3, 3]   # top-right
]
# returns: true
```
