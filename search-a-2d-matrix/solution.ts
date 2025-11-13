/*
 * treat the grid as one long sorted array.
 * the math is simple enough that i keep it inline instead of refactoring.
 */
function searchMatrix(matrix: number[][], target: number): boolean {
  if (matrix.length === 0 || matrix[0].length === 0) {
    return false;
  }

  const rows = matrix.length;
  const cols = matrix[0].length;
  let lo = 0;
  let hi = rows * cols - 1;

  while (lo <= hi) {
    const mid = lo + Math.floor((hi - lo) / 2);
    const r = Math.floor(mid / cols);
    const c = mid % cols;
    const value = matrix[r][c];

    if (value === target) {
      return true;
    }

    if (value < target) {
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }

  return false;
}

export { searchMatrix };

