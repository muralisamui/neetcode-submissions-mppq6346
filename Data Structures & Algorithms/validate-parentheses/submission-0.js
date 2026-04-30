class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
  constructor(){
    this.items = [];
  }
  
  push(item){
    this.items.push(item)
  };
  pop(){
    return this.items.pop();
  }
  peek(){
    return this.items[this.items.length-1];
  }
  isEmpty(){
    return this.items.length === 0;
  }
  printStack(){
    for(const item of this.items){
      console.log(item)
    }
  }
  isValid(s) {
    
    const openClose = {
      '(' : ')',
      '{' : '}',
      '[' : ']'
    };
    
    for(const char of s){
      let lastItem = this.peek();
      if(!lastItem){
        this.push(char);
      }else{
        if(char === openClose[lastItem]){
          this.pop();
        }else{
          this.push(char);
        }
      }
    }
     return this.items.length===0
  }
}
