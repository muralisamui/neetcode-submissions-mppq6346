class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
      let leftPdtArr = new Array(nums.length).fill(1);
      let rightPdtArr = new Array(nums.length).fill(1);
      for(let i=1; i<nums.length; i++){
        leftPdtArr[i] = nums[i-1]*leftPdtArr[i-1];
      }
      for(let i=nums.length-2; i>=0; i--){
        rightPdtArr[i] = nums[i+1]*rightPdtArr[i+1];
      }
      
      for(let i=0; i<nums.length; i++){
        nums[i] = leftPdtArr[i] * rightPdtArr[i];
      }
      
      return nums;
    }
}