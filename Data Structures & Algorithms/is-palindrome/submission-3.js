class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.toLowerCase();
        let transformedStr = "";

        for (const ch of s) {
            const code = ch.charCodeAt(0);         
            // allow a-z and 0-9
            if (
                (code >= 97 && code <= 122) || 
                (code >= 48 && code <= 57)
            ) {
                transformedStr += ch;
            }
        }

        let i = 0;
        let j = transformedStr.length - 1;

        while (i < j) {
            if (transformedStr[i] !== transformedStr[j]) {
                return false;
            }
            i++;
            j--;
        }
        return true;
    }
}
