function reverseStr(s: string, k: number): string {
    const chars = s.split("");
    for (let start = 0; start < chars.length; start += 2 * k) {
        let left = start;
        let right = Math.min(start + k - 1, chars.length - 1);
        while (left < right) {
            [chars[left], chars[right]] = [chars[right], chars[left]];
            left++;
            right--;
        }
    }
    return chars.join("");
}
