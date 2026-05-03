class Solution {
  dailyTemperatures(temperatures) {
    const n = temperatures.length;
    let result = new Array(n).fill(0);
    let stack = [];
    
    for(let i=n-1; i>=0; i--){
      
      while(stack.length &&
        temperatures[stack[stack.length-1]] <= temperatures[i]
      ){
        stack.pop();
      }
      
      if(stack.length){
        result[i] = stack[stack.length-1] - i;
      }
      
      stack.push(i);
    }
    
    return result;
  }
}