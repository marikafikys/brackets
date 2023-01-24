module.exports = function check(str, bracketsConfig) {
  let val = str.length;
  if (str.search(/[\[\]\{\}\(\)\|]/) == -1) {
		return true;
	}
  if (str[0] == ")" || str[0] == "]" || str[0] == "}" || str[str.length-1] == "(" || str[str.length-1] == "[" || str[str.length-1] == "{" || str.length % 2 !== 0) {
		return false;
	} else {
      for (let i = 0; i <= val/2; i++) {
        str = str.replace("()", "");
        str = str.replace("[]", "");
        str = str.replace("{}", "");
        str = str.replace("||", "");
      }
  }
  if (str == "" || str == "()" || str == "[]" || str == "{}" || str == "||") {return true} else {return false};
}

// function check(str, bracketsConfig) {
//   let val = str.length;
//   if (str.search(/[\[\]\{\}\(\)\|]/) == -1) {
// 		return true;
// 	}
//   if (str[0] == ")" || str[0] == "]" || str[0] == "}" || str[str.length-1] == "(" || str[str.length-1] == "[" || str[str.length-1] == "{" || str.length % 2 !== 0) {
// 		return false;
// 	} else {
//       for (let i = 0; i <= val/2; i++) {
//         str = str.replace("()", "");
//         str = str.replace("[]", "");
//         str = str.replace("{}", "");
//         str = str.replace("||", "");
//         console.log(i, str);
//       }
//   }
//   if (str == "" || str == "()" || str == "[]" || str == "{}" || str == "||") {return true} else {return false};
// }

// console.log(check('([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]])((([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]])))'));


