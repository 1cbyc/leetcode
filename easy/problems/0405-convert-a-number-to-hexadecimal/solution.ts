function toHex(num: number): string {
    if (num === 0) return "0";

    const hexChars = "0123456789abcdef";
    let result = "";

    const n = num >>> 0;
    let temp = n;

    while (temp) {
        result = hexChars[temp % 16] + result;
        temp = Math.floor(temp / 16);
    }

    return result;
}
