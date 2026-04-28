class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = {};
        const result = [];

        for(const word of strs){
            const freqArr = new Array(26).fill(0);

            for(const char of word){
                const charCount = char.charCodeAt(0) - 'a'.charCodeAt(0);
                freqArr[charCount]++;
            }
            const key = freqArr.join("#");
            if(!map[key]){
                map[key] = [word];
            }else{
                map[key].push(word);
            }
        }
        for(const key in map){
            result.push(map[key]);
        }
        return result;
    }
}
