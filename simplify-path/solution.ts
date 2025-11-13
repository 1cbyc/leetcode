function simplifyPath(path: string): string {
  const pieces = path.split("/");
  const stack: string[] = [];

  for (const piece of pieces) {
    if (piece === "" || piece === ".") {
      continue;
    }

    if (piece === "..") {
      stack.pop();
      continue;
    }

    stack.push(piece);
  }

  return `/${stack.join("/")}`;
}

export { simplifyPath };

