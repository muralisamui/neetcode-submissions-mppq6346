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
  isValid(s) {
    
    const openClose = {
      '(' : ')',
      '{' : '}',
      '[' : ']'
    };
    
    for(const char of s){
      let lastItem = this.items[this.items.length-1];
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
