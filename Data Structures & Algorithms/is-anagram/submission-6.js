class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        let sMap = {};
        let tMap = {};

        for(let i=0; i<s.length; i++){
            if(sMap[s[i]] === undefined){
                sMap[s[i]] = 1;
            }else{
                sMap[s[i]]++;
            }
        }

         for(let i=0; i<t.length; i++){
            if(tMap[t[i]] === undefined){
                tMap[t[i]] = 1;
            }else{
                tMap[t[i]]++;
            }
        }

        for(let char in sMap){
            if(sMap[char] !== tMap[char]){
                return false;
            }
        }

        return true;
    }
}
