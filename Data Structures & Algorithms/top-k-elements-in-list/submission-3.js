class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
      const freqArr = new Array(nums.length+1).fill(0);
      const map = {};
      const result = [];
      // creating the frequecy map
      for(const num of nums){
        map[num] = (map[num] || 0) + 1;
      }
      
      // creating the bucket array with count
      for(const key in map){
        const value = map[key];
        if(!freqArr[value]){
          freqArr[value] = [];
        }
        freqArr[value].push(Number(key));
      }
      
      for(let i=freqArr.length-1; i>0 && k>0; i--){
        if(freqArr[i]){
          for(const num of freqArr[i]){
            result.push(num);
            k--;
            if(k === 0) break;
          }
        }
      }
      return result;
    }
}