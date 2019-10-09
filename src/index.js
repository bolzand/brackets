module.exports = function check(str, bracketsConfig) {
  const config = {};
  for (let i = 0; i < bracketsConfig.length; i++){
    let element = bracketsConfig[i];
    config[element[1]] = element[0];
  }

  let stack = [];
  for (let i = 0; i< str.length; i++){
    let symbol = str[i];
    if (stack.length && config[symbol] == stack[stack.length - 1]){
      stack.pop();
    } else {
      stack.push(symbol);
    }
  }

  return stack.length == 0;
}
