class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxprofitNumber = 0;
  
        for(let i=0; i<prices.length; i++){
        let currentPrice = prices[i];
        let highestPrice=0;
        let j = i+1;
        
        while(j<prices.length){
        if(prices[j]>currentPrice){
                highestPrice = Math.max(highestPrice,prices[j]);
                maxprofitNumber = Math.max(maxprofitNumber, highestPrice - currentPrice);
        }
        j++;
        }
        }
        return maxprofitNumber;
    }
}
