/*
 * brute-force check every 3x3 block:
 * - ensure numbers 1..9 show up exactly once
 * - sum rows, cols, diagonals to 15
 */
function numMagicSquaresInside(grid: number[][]): number {
  const rows = grid.length;
  const cols = rows ? grid[0].length : 0;
  if (rows < 3 || cols < 3) {
    return 0;
  }

  let count = 0;

  for (let r = 0; r <= rows - 3; ++r) {
    for (let c = 0; c <= cols - 3; ++c) {
      if (isMagic(grid, r, c)) {
        count += 1;
      }
    }
  }

  return count;
}

function isMagic(grid: number[][], r: number, c: number): boolean {
  if (grid[r + 1][c + 1] !== 5) {
    return false;
  }

  const seen = new Array<boolean>(10).fill(false);
  for (let i = 0; i < 3; ++i) {
    for (let j = 0; j < 3; ++j) {
      const value = grid[r + i][c + j];
      if (value < 1 || value > 9 || seen[value]) {
        return false;
      }
      seen[value] = true;
    }
  }

  const rows = [
    grid[r][c] + grid[r][c + 1] + grid[r][c + 2],
    grid[r + 1][c] + grid[r + 1][c + 1] + grid[r + 1][c + 2],
    grid[r + 2][c] + grid[r + 2][c + 1] + grid[r + 2][c + 2],
  ];

  const cols = [
    grid[r][c] + grid[r + 1][c] + grid[r + 2][c],
    grid[r][c + 1] + grid[r + 1][c + 1] + grid[r + 2][c + 1],
    grid[r][c + 2] + grid[r + 1][c + 2] + grid[r + 2][c + 2],
  ];

  const diagonals = [
    grid[r][c] + grid[r + 1][c + 1] + grid[r + 2][c + 2],
    grid[r][c + 2] + grid[r + 1][c + 1] + grid[r + 2][c],
  ];

  for (const sum of [...rows, ...cols, ...diagonals]) {
    if (sum !== 15) {
      return false;
    }
  }

  return true;
}

export { numMagicSquaresInside };

