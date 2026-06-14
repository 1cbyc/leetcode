function triangleType(nums: number[]): string {
  const sorted = [...nums].sort((a, b) => a - b);
  const [a, b, c] = sorted;
  if (a + b <= c) {
    return "none";
  }
  if (a === b && b === c) {
    return "equilateral";
  }
  if (a === b || b === c) {
    return "isosceles";
  }
  return "scalene";
}

export { triangleType };
