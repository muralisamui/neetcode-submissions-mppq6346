class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let map={};
        for(let i=0;i<nums.length;i++){
            if(!map[nums[i]]){
                map[nums[i]] = true;
            }else{
                return true;
            }
        }
        return false;
    }
}
