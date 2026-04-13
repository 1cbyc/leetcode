function isValid(s: string): boolean {
    const stack: string[] = [];
    const pairs: {[k:string]:string} = {')':'(', ']':'[', '}':'{'};
    for (const c of s) {
        if ('([{'.includes(c)) stack.push(c);
        else if (!stack.length || stack[stack.length-1] !== pairs[c]) return false;
        else stack.pop();
    }
    return stack.length === 0;
}
