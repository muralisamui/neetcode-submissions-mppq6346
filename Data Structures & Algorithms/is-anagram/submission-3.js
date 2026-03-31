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
        for (let i = 0; i < s.length; i++) {
            sMap[s[i]] = (sMap[s[i]] || 0) + 1;
        }
        for (let i = 0; i < t.length; i++) {
            tMap[t[i]] = (tMap[t[i]] || 0) + 1;
        }

        for(const el in sMap){
            if(!tMap[el] || sMap[el] !== tMap[el]) return false;
        }
        return true;

    }
}
