module.exports = function check(str, bracketsConfig) {
  let stack = [];
  
  let form = {};

  let type = {};

  for (let i = 0; i < bracketsConfig.length; i++) {

    let left = bracketsConfig[i][0];
    let right = bracketsConfig[i][1];
    form[left] = right;
    form[right] = left;
    type[left] = "opened";
    type[right] = "closed";

  }

  for (let i = 0; i < str.length; i++) {
    let top = stack.length <= 0 ? null : stack[stack.length - 1];
    let curr = str[i];
    if (type[curr] == "opened") {
      stack.push(curr);
    } else if (type[curr] == "closed" && curr !== form[curr] && stack.length == 0) {
      return false;
    } else if (type[curr] == "closed" && top == form[curr]) {
      stack.pop();
    } else if (type[curr] == "closed" && curr == form[curr] ){
      stack.push(curr);
    }
  }
  return stack.length == 0 ? true : false;
}


