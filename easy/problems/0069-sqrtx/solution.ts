function mySqrt(x: number): number {
    let lo = 0, hi = x;
    while (lo <= hi) {
        const mid = Math.floor((lo + hi) / 2);
        if (mid * mid === x) return mid;
        else if (mid * mid < x) lo = mid + 1;
        else hi = mid - 1;
    }
    return hi;
}
