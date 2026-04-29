class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
      let sortedNums = nums.sort((a,b)=>a-b);
      let result = [];
      for(let i=0; i<nums.length; i++){
        if(i>0 && nums[i] === nums[i-1]) continue;
        let j = i+1;
        let k = nums.length-1;
        
        while(j<k){
          let sum = sortedNums[i] + sortedNums[j] + sortedNums[k];
          
          if(sum === 0){
            result.push([sortedNums[i], sortedNums[j], sortedNums[k]]);
            j++;
            k--;
            
            while(j<k && sortedNums[j] === sortedNums[j-1]) j++;
            while(j<k && sortedNums[k] === sortedNums[k+1]) k++;
            
          }else if(sum<0){
            j++;
          }else if(sum>0){
            k--;
          }
        }
      }
      
      return result;
    }
}