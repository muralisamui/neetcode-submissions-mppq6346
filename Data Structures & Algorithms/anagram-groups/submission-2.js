class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map={};
        let result = [];

        for(const word of strs){
            let freqArr = new Array(26).fill(0);
            for(const char of word){
                freqArr[char.charCodeAt(0)-'a'.charCodeAt(0)]++;
            }
            let convertedFreqStr = freqArr.join("#")
            if(map[convertedFreqStr] === undefined){
                map[convertedFreqStr] = [word];
            }else{
                 map[convertedFreqStr].push(word)
            }
        }

        for(const arrs in map){
            result.push(map[arrs]);
        }
         return result;
    }
}
