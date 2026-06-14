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
            let currEl = s[i];
            if(sMap[currEl] !== undefined){
                sMap[currEl]++;
            }else{
                sMap[currEl] = 1;
            }
        }

        for(let i=0; i<t.length; i++){
            let currEl = t[i];
            if(tMap[currEl] !== undefined){
                tMap[currEl]++;
            }else{
                tMap[currEl] = 1;
            }
        }

        for(const char in sMap){
           if(sMap[char] !== tMap[char]) return false;
        }

        return true;
    }
}
