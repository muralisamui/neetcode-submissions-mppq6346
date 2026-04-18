class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let left = 0;
        let freqArr = new Array(26).fill(0);
        let maxFreq = 0;
        let result = 0;
        
        for(let right=0; right<s.length; right++){
            let currElIndex = s.charCodeAt(right) - 65;
            freqArr[currElIndex]++;
            
            maxFreq = Math.max(maxFreq, freqArr[currElIndex]);
            
            let windowSize = right - left + 1;
            
            if(windowSize - maxFreq > k){
                freqArr[s.charCodeAt(left) - 65] --;
                left++;
            }
            
            result = Math.max(result, right-left+1);
        }
        
        return result;
    }
}
