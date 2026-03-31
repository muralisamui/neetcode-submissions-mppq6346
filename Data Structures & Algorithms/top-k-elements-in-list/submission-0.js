class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map= {};
        let bucketArr =[ ...new Array(nums.length+1)].map(()=>[]);
        let resultArr = [];
        for (let i=0;i<nums.length;i++){
            if(map[nums[i]] === undefined){
                map[nums[i]] = 1;
            }else{
                map[nums[i]]++;
            }
        }
        for(const key in map){
            bucketArr[map[key]].push(key)
        }
        for(let i=bucketArr.length-1;i>=0;i--){
            if(bucketArr[i].length && resultArr.length<k){
                resultArr.push(...bucketArr[i]);
            }
        }
        return resultArr;
    }
}
