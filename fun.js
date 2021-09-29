function stringLength(string) {
  if(string.length < 1 || string.length > 10){
    return "error"
  }else {
    return string.length;
  }  
}

function reverseString(string){
  return string.split("").reverse().join("");  
}

const calculator = {
  add: (n1, n2) => n1 + n2,
  subtract: (n1, n2) => n1 - n2,
  multiply: (n1, n2) => n1 * n2,
  divide: (n1, n2) => n1 / n2,
};

function capitalize(string){
  return string[0].toUpperCase() + string.slice(1);
}

module.exports = { stringLength, reverseString, calculator, capitalize }