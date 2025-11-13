class NeighborSum {
  private readonly grid: number[][];
  private readonly prefix: number[][];

  constructor(grid: number[][]) {
    this.grid = grid;
    this.prefix = this.buildPrefix(grid);
  }

  adjacentSum(value: number): number {
    const [r, c] = this.find(value);
    if (r === -1) {
      return 0;
    }

    let total = 0;
    total += this.safeGet(r - 1, c);
    total += this.safeGet(r + 1, c);
    total += this.safeGet(r, c - 1);
    total += this.safeGet(r, c + 1);
    return total;
  }

  diagonalSum(value: number): number {
    const [r, c] = this.find(value);
    if (r === -1) {
      return 0;
    }

    let total = 0;
    total += this.safeGet(r - 1, c - 1);
    total += this.safeGet(r - 1, c + 1);
    total += this.safeGet(r + 1, c - 1);
    total += this.safeGet(r + 1, c + 1);
    return total;
  }

  private buildPrefix(grid: number[][]): number[][] {
    const rows = grid.length;
    const cols = rows ? grid[0].length : 0;
    const prefix = Array.from({ length: rows + 1 }, () =>
      new Array<number>(cols + 1).fill(0),
    );

    for (let r = 0; r < rows; ++r) {
      for (let c = 0; c < cols; ++c) {
        prefix[r + 1][c + 1] =
          grid[r][c] + prefix[r][c + 1] + prefix[r + 1][c] - prefix[r][c];
      }
    }

    return prefix;
  }

  private find(target: number): [number, number] {
    for (let r = 0; r < this.grid.length; ++r) {
      for (let c = 0; c < this.grid[r].length; ++c) {
        if (this.grid[r][c] === target) {
          return [r, c];
        }
      }
    }
    return [-1, -1];
  }

  private safeGet(r: number, c: number): number {
    if (r < 0 || c < 0 || r >= this.grid.length || c >= this.grid[0].length) {
      return 0;
    }
    return this.grid[r][c];
  }
}

export { NeighborSum };

