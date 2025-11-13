/*
 * brute-force-ish but still reasonable: compute prefix sums for obstacles,
 * mark where a k x l stamp fits, then ensure every zero cell is covered.
 */
function possibleToStamp(grid: number[][], stampHeight: number, stampWidth: number): boolean {
  const rows = grid.length;
  if (rows === 0) {
    return true;
  }
  const cols = grid[0].length;

  const prefix = buildPrefix(grid);

  const canStamp = Array.from({ length: rows }, () => new Array<boolean>(cols).fill(false));

  for (let r = 0; r + stampHeight - 1 < rows; ++r) {
    for (let c = 0; c + stampWidth - 1 < cols; ++c) {
      const r2 = r + stampHeight - 1;
      const c2 = c + stampWidth - 1;

      if (areaSum(prefix, r, c, r2, c2) === 0) {
        canStamp[r][c] = true;
      }
    }
  }

  const cover = Array.from({ length: rows + 1 }, () => new Array<number>(cols + 1).fill(0));

  for (let r = 0; r < rows; ++r) {
    for (let c = 0; c < cols; ++c) {
      if (!canStamp[r][c]) {
        continue;
      }

      cover[r][c] += 1;
      cover[r + stampHeight][c] -= 1;
      cover[r][c + stampWidth] -= 1;
      cover[r + stampHeight][c + stampWidth] += 1;
    }
  }

  for (let r = 0; r < rows; ++r) {
    for (let c = 0; c < cols; ++c) {
      cover[r][c + 1] += cover[r][c];
    }
  }

  for (let c = 0; c < cols; ++c) {
    for (let r = 0; r < rows; ++r) {
      cover[r + 1][c] += cover[r][c];
    }
  }

  for (let r = 0; r < rows; ++r) {
    for (let c = 0; c < cols; ++c) {
      if (grid[r][c] === 1) {
        continue;
      }
      if (cover[r][c] <= 0) {
        return false;
      }
    }
  }

  return true;
}

function buildPrefix(grid: number[][]): number[][] {
  const rows = grid.length;
  const cols = rows ? grid[0].length : 0;
  const prefix = Array.from({ length: rows + 1 }, () => new Array<number>(cols + 1).fill(0));

  for (let r = 0; r < rows; ++r) {
    for (let c = 0; c < cols; ++c) {
      prefix[r + 1][c + 1] =
        grid[r][c] + prefix[r][c + 1] + prefix[r + 1][c] - prefix[r][c];
    }
  }

  return prefix;
}

function areaSum(prefix: number[][], r1: number, c1: number, r2: number, c2: number): number {
  return (
    prefix[r2 + 1][c2 + 1] -
    prefix[r1][c2 + 1] -
    prefix[r2 + 1][c1] +
    prefix[r1][c1]
  );
}

export { possibleToStamp };

