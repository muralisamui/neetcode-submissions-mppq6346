class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let suffixArr = []; // [1,1,2,8]       [1,-1,0,0,0]
        let prefixArr = []; // [48,24,6,1]  [0, 6,6,3,1]
        suffixArr[0]=1;
        prefixArr[nums.length-1] = 1;
        let suffixProd =1;
        let prefixProd = 1;
        for(let i=1; i<nums.length; i++){
            suffixProd *= nums[i-1];
            suffixArr[i] = suffixProd;
        }
        for(let i=nums.length-2;i>=0;i--){
            prefixProd *=nums[i+1];
            prefixArr[i] = prefixProd;
        }
        for(let i=0;i<nums.length;i++){
            nums[i] = prefixArr[i]*suffixArr[i];
        }
        return nums;
    }
}
