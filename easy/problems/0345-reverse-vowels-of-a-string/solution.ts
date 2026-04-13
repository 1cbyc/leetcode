function reverseVowels(s: string): string {
    const vowels = new Set('aeiouAEIOU');
    const arr = s.split('');
    let left = 0, right = arr.length - 1;

    while (left < right) {
        while (left < right && !vowels.has(arr[left])) {
            left++;
        }
        while (left < right && !vowels.has(arr[right])) {
            right--;
        }
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }

    return arr.join('');
}
