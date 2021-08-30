module.exports = function check(str, bracketsConfig) {
  let stack =[];
  const open_cob =[];
  let close_cob ={};
  for (let i =0;i<bracketsConfig.length; i++){
    let arr =bracketsConfig[i];
    for(let j=0; j<arr.length - 1; j++){
      
      close_cob[arr[j+1]]=arr[j];
      open_cob[i]=arr[j];
    }
  } 

  for (let i=0; i<str.length; i++){
    let symbol = str[i];
    if (open_cob.includes(symbol)){
      if (close_cob[symbol]===symbol){
          let  top_symbol=stack[stack.length-1];
          if (close_cob[symbol]===top_symbol){
            stack.pop();
          }else{
            stack.push(symbol);
            
          }
      }else{
        stack.push(symbol);
      }
    }else{
      if (stack.length===0){
        return false;
      }
    
      let  top_symbol=stack[stack.length-1];
      if (close_cob[symbol]===top_symbol){
        stack.pop();
      }else{
        return false;
      }
    }

  }
  return stack.length===0;
  // your solution
}