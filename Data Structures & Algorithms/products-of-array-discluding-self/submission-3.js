class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const leftProd = new Array(nums.length).fill(1);
        const rightProd = new Array(nums.length).fill(1);

        for (let i = 1; i < nums.length; i++) {
            leftProd[i] = leftProd[i - 1] * nums[i - 1];
        }

        for (let j = nums.length - 2; j >= 0; j--) {
            rightProd[j] = rightProd[j + 1] * nums[j + 1];
        }

        for (let i = 0; i < nums.length; i++) {
            nums[i] = leftProd[i] * rightProd[i];
        }

        return nums;
    }
}