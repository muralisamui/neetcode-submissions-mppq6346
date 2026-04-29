class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
      s = s.toLowerCase();
      let transformedStr = "";
      for(const char of s ){
        const code = char.charCodeAt(0)
        if(code>='a'.charCodeAt(0) && code <='z'.charCodeAt(0)
          ||
          code>="0".charCodeAt(0) && code <= "9".charCodeAt(0)
        ){
          transformedStr+=char;
        }
      }
      let left = 0;
      let right = transformedStr.length-1;
      
      while(left<right){
        if(transformedStr[left] !== transformedStr[right]){
          return false;
        }
        left++;
        right--;
      }
      return true;
    }
}
