function reverse(x: number): number {
    const sign = x < 0 ? -1 : 1;
    const rev = parseInt(Math.abs(x).toString().split('').reverse().join('')) * sign;
    return rev < -(2**31) || rev > 2**31 - 1 ? 0 : rev;
}
