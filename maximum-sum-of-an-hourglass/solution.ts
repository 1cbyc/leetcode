function maxSum(grid: number[][]): number {
  const rows = grid.length;
  if (rows < 3) {
    return 0;
  }
  const cols = grid[0].length;
  if (cols < 3) {
    return 0;
  }

  let best = Number.NEGATIVE_INFINITY;

  for (let r = 0; r <= rows - 3; ++r) {
    for (let c = 0; c <= cols - 3; ++c) {
      const sum =
        grid[r][c] +
        grid[r][c + 1] +
        grid[r][c + 2] +
        grid[r + 1][c + 1] +
        grid[r + 2][c] +
        grid[r + 2][c + 1] +
        grid[r + 2][c + 2];

      if (sum > best) {
        best = sum;
      }
    }
  }

  return best;
}

export { maxSum };

