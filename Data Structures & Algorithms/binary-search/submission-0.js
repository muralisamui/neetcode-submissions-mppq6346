class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let start  = 0;
        let end = nums.length - 1;
        
        while (start <= end) {
            let middle = Math.floor((start + end) / 2);
            
            if (target === nums[middle]) {
                return middle;
            } else if (target < nums[middle]) {
                end = middle - 1;
            } else {
                start = middle + 1;
            }
        }
        
        return -1;
    }
}