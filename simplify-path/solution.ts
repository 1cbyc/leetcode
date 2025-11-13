/*
 * simple stack walk: split by slash, skip blanks, pop on '..'.
 * keeping it direct so it matches how i'd scribble it on a whiteboard.
 */
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

