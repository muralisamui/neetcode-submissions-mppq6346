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

/**
 * we initialise an array where we store the result
 * we start from the back of the array
 * we check if on top of the stack if there is an element which is less than the current element - YES/NO
 * 
 * YES - remove all the elements in the stack that are less than the current - this is because the current element must be the 
 * closest highest to the number ahead of it
 * 
 * we also have to store the result of the diffrence of current and the next highest temp day in the array - this will be checked only when
 * there is an elemnt present in the stack else it means there is no days in future with higher temperature and we simply push to stack
 * 
 * NO - we push the element in the stack
 */