class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        let maxCount = 0;

        for (const num of set) {
            if (!set.has(num - 1)) {
                let count = 0;
                let curEl = num;

                while (set.has(curEl)) {
                    count++;
                    curEl++;
                }
                maxCount = Math.max(maxCount, count);
            }
        }

        return maxCount;
    }
}
