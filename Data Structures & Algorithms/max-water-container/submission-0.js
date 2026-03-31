class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxWater = 0;
        let i=0;
        let j=heights.length-1;

        while(i<j){
            let width = j-i;
            let height = Math.min(heights[i], heights[j]);
            maxWater = Math.max(maxWater, height*width);
            if(heights[i]<heights[j]){
                i++;
            }else {
                j--;
            }
        }
        return maxWater;
    }
}
