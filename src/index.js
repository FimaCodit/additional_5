module.exports = function check(str, bracketsConfig) {
  let Stack = [];
  
  for(let i = 0; i < str.length; i++) {
    for(let j = 0; j < bracketsConfig.length; j++) {
      if(str.charAt(i) == bracketsConfig[j][0] && bracketsConfig[j][0] == bracketsConfig[j][1]) {
        if(str.charAt(i) == Stack[Stack.length -1]) {
          Stack.pop();
        } else {
          Stack.push(str.charAt(i));
        }
      } else {
        if(str.charAt(i) == bracketsConfig[j][0]) {
          Stack.push(str.charAt(i));
        } else if(str.charAt(i) == bracketsConfig[j][1]) {
          if(Stack.pop() != bracketsConfig[j][0]) {
            return false;
          }
        }
      }
    }
  }
  if(Stack.length != 0) {
    return false;
  }
  return true;
}
