class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = {};
        let res = [];

        for(const word of strs){
            let freqArr = new Array(26).fill(0);
            for(const char of word){
                const charCode = char.charCodeAt(0) - 'a'.charCodeAt(0);
                freqArr[charCode]++;
            }

            const key = freqArr.join("#");

            if(map[key] === undefined){
                map[key] = [word];
            }else{
                map[key].push(word);
            }
        }

        for(const key in map){
            res.push(map[key]);
        }
        return res;
    }
}
