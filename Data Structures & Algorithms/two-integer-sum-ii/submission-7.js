class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let index1 = 0;
        let index2 = numbers.length - 1;

        while (index1 < index2) {
            let currentSum = numbers[index1] + numbers[index2];
            if (currentSum > target) {
                index2--;
            } else if (currentSum < target) {
                index1++;
            } else if (currentSum === target) {
                return [index1+1, index2+1];
            }
        }
    }
}
