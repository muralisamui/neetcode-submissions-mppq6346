class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isPalindrome(s) {
    s = s.toLowerCase();
    let concatStr = "";

    for (const char of s) {
      const currCharCode = char.charCodeAt(0);
      if (currCharCode >= 'a'.charCodeAt(0) && currCharCode <= 'z'.charCodeAt(0)
        ||
        currCharCode >= "0".charCodeAt(0) && currCharCode <= "9".charCodeAt(0)
      ) {
        concatStr += char;
      }
    };

    let left = 0;
    let right = concatStr.length - 1;

    while (left < right) {
      if (concatStr[left] !== concatStr[right]) {
        return false;
      } else {
        left++;
        right--;
      }
    }
    return true;
  }
}
