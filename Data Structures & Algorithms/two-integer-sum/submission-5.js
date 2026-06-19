class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = {};

        for (let i=0; i<nums.length; i++){
            let current = nums[i];
            let compliment = target - current;

            if(map[compliment] !== undefined && map[compliment] !== i){
                return [Math.min(map[compliment], i),Math.max(map[compliment], i)];
            }else{
                map[current] = i;
            }
        }
    }
}
