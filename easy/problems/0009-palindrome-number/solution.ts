function isPalindrome(x: number): boolean {
    if (x < 0) return false;
    const s = x.toString();
    return s === s.split('').reverse().join('');
}
