class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
      let map = new Set(nums);
      let maxCount = 0;
      
      for(const value of map){
        if(!map.has(value-1)){
          let count = 0;
          let currentEl = value;
          while(map.has(currentEl)){
            count++;
            currentEl++;
          }
          maxCount = Math.max(maxCount, count);
        }
      }
      return maxCount;
    }
}