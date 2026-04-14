class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfitMade = 0; 
        let left = prices[0];
        
        for(let i=1; i<prices.length; i++){
            if(prices[i]<left){
                left = prices[i]
            }else{
                maxProfitMade = Math.max(maxProfitMade, prices[i]-left);
            }
        }

        return maxProfitMade;
    }
}
