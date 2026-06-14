class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
      const map = {};
      for(let i=0; i<nums.length; i++){
        const current = nums[i]
        if(map[current] !== undefined){
          return true
        }else{
          map[current] = true;
        }
      }
      return false;
    }
}
