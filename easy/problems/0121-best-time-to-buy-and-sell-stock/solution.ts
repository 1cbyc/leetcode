function maxProfit(prices: number[]): number {
    let min_price = Infinity;
    let max_profit = 0;
    for (const price of prices) {
        min_price = Math.min(min_price, price);
        max_profit = Math.max(max_profit, price - min_price);
    }
    return max_profit;
}
