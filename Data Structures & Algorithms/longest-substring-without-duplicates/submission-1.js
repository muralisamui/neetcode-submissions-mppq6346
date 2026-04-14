class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left = 0;
        let map = new Set();
        let maxCount = 0;
        
        for(let right = 0; right<s.length; right++){
            let currentEl = s[right];
            
            while(map.has(currentEl)){
                map.delete(s[left]);
                left++;
            }
            map.add(currentEl);
            maxCount = Math.max(maxCount, (right - left) + 1);
        }
        return maxCount;
    }
}
