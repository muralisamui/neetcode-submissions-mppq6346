class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let map = new Set(nums);
        let maxSubCount=0;

        for(const el of map){ 
            if(!map.has(el-1)){ 
                let currentNum = el;
                let count = 0; 
                while(map.has(currentNum)){ 
                    count++;
                    currentNum++;
                }
                maxSubCount = Math.max(maxSubCount,count);
            }
        }
        return maxSubCount;
    }
}
