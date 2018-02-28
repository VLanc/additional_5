module.exports = function check(str, bracketsConfig) {
  let inputStrArr = str.split("");
  let bracketsArr = [];

  for(let i = 0; i < bracketsConfig.length; i++) {
    for(let j = 0; j < bracketsConfig[i].length; j++) {
      bracketsArr.push(bracketsConfig[i][j]);
    }
  }

  for(let i = 0; i < inputStrArr.length; i++) {
    for(let j = 0; j < bracketsArr.length; j += 2) {
      if(inputStrArr[i] == bracketsArr[j] && inputStrArr[i+1] == bracketsArr[j+1]) {
        inputStrArr.splice(i, 2); // will delete opening-closing brackets pairs while they're
        i = -1;
        break;
      }
    }
  }

  if(inputStrArr[0]) {
    return false;
  } else return true;
}
