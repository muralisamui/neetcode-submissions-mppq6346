class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfitMade = 0; // 5
        let minimum = prices[0]; // 1
        for(let i=0; i<prices.length; i++){
                minimum = Math.min(minimum, prices[i]);
                if(prices[i]>minimum){
                        maxProfitMade = Math.max(maxProfitMade,(prices[i] - minimum));
                }
        }
        return maxProfitMade;
    }
}
