function canBeEqual(target: number[], arr: number[]): boolean {
  return [...target].sort((a, b) => a - b).join(",") === [...arr].sort((a, b) => a - b).join(",");
}

export { canBeEqual };
