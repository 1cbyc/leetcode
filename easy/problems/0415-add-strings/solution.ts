function addStrings(num1: string, num2: string): string {
    let result = "";
    let carry = 0;
    let i = num1.length - 1;
    let j = num2.length - 1;

    while (i >= 0 || j >= 0 || carry) {
        const n1 = i >= 0 ? parseInt(num1[i]) : 0;
        const n2 = j >= 0 ? parseInt(num2[j]) : 0;

        const total = n1 + n2 + carry;
        result = String(total % 10) + result;
        carry = Math.floor(total / 10);

        i--;
        j--;
    }

    return result;
}
