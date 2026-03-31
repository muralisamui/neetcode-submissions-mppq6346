class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target -5
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map={};
        for(let i=0;i<nums.length;i++){
            let current = nums[i]; //4
            let compliment = target-current; //3
            if(map[compliment] === undefined){
                map[current] = i; // {3:1}
            }else{
                return ([map[compliment],i]);
            }
        }
    }
}
