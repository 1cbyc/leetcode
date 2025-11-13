function orderOfLargestPlusSign(n: number, mines: number[][]): number {
  const blocked = new Set<string>();
  for (const [r, c] of mines) {
    blocked.add(`${r},${c}`);
  }

  const left = Array.from({ length: n }, () => new Array<number>(n).fill(0));
  const right = Array.from({ length: n }, () => new Array<number>(n).fill(0));
  const up = Array.from({ length: n }, () => new Array<number>(n).fill(0));
  const down = Array.from({ length: n }, () => new Array<number>(n).fill(0));

  for (let r = 0; r < n; ++r) {
    let streak = 0;
    for (let c = 0; c < n; ++c) {
      if (blocked.has(`${r},${c}`)) {
        streak = 0;
      } else {
        streak += 1;
      }
      left[r][c] = streak;
    }
  }

  for (let r = 0; r < n; ++r) {
    let streak = 0;
    for (let c = n - 1; c >= 0; --c) {
      if (blocked.has(`${r},${c}`)) {
        streak = 0;
      } else {
        streak += 1;
      }
      right[r][c] = streak;
    }
  }

  for (let c = 0; c < n; ++c) {
    let streak = 0;
    for (let r = 0; r < n; ++r) {
      if (blocked.has(`${r},${c}`)) {
        streak = 0;
      } else {
        streak += 1;
      }
      up[r][c] = streak;
    }
  }

  for (let c = 0; c < n; ++c) {
    let streak = 0;
    for (let r = n - 1; r >= 0; --r) {
      if (blocked.has(`${r},${c}`)) {
        streak = 0;
      } else {
        streak += 1;
      }
      down[r][c] = streak;
    }
  }

  let best = 0;
  for (let r = 0; r < n; ++r) {
    for (let c = 0; c < n; ++c) {
      if (blocked.has(`${r},${c}`)) {
        continue;
      }
      const order = Math.min(left[r][c], right[r][c], up[r][c], down[r][c]);
      if (order > best) {
        best = order;
      }
    }
  }

  return best;
}

export { orderOfLargestPlusSign };

