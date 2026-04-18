class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let left = 0; 
        let right = 0;
        let max = 0;
        const map = {};
        let mostFrequentlyCount = 0;
        while (right < s.length) {
            const c = s.charAt(right);
            map[c] = map[c] === undefined ? 1 : map[c] + 1;
            mostFrequentlyCount = Math.max(mostFrequentlyCount, map[c]);
            
            while ((right - left + 1 - mostFrequentlyCount) > k) {
                map[s.charAt(left)] = map[s.charAt(left)] - 1;
                left++;
            }
            max = Math.max(max, right - left + 1);
            right++;
        }
        return max;
    }
}