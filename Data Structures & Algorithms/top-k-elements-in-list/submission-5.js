class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  topKFrequent(nums, k) {
    const map = {};
    const freqArr = new Array(nums.length + 1).fill(0);
    const result = [];

    for (const num of nums) {
      map[num] = (map[num] || 0) + 1;
    }

    for(const key in map){
      let value = map[key];
      if(!freqArr[value]){
        freqArr[value] = [];
      }
      freqArr[value].push(key);
    }

    for(let i=freqArr.length-1; i>0 && k>0; i--){
      if(freqArr[i].length){
        for(const num of freqArr[i]){
          result.push(num);
          k--;
        }
      }
    }
    return result;
  }
}
