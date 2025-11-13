function maximizeSquareHoleArea(n: number, m: number, hBars: number[], vBars: number[]): number {
  const maxH = longestStreak(hBars);
  const maxV = longestStreak(vBars);
  const side = Math.min(maxH, maxV);
  return side * side;
}

function longestStreak(bars: number[]): number {
  if (bars.length === 0) {
    return 1;
  }

  bars.sort((a, b) => a - b);

  let best = 1;
  let current = 1;

  for (let i = 1; i < bars.length; ++i) {
    if (bars[i] === bars[i - 1] + 1) {
      current += 1;
    } else if (bars[i] === bars[i - 1]) {
      continue;
    } else {
      current = 1;
    }
    if (current > best) {
      best = current;
    }
  }

  return best + 1;
}

export { maximizeSquareHoleArea };

