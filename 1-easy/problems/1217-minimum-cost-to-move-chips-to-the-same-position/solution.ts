function minCostToMoveChips(position: number[]): number {
  let even = 0;
  for (const pos of position) {
    even += pos % 2 === 0 ? 1 : 0;
  }
  return Math.min(even, position.length - even);
}

export { minCostToMoveChips };
