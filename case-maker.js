let camelCase = function(input) {
  let stringArray = input.split(' ');
  let camelString, firstWord;
  let remainingString = '';

  for (let i = 0; i < camelCase.length; i++) {
    
    if (stringArray.length === 1) {
      return stringArray.toString();
    } else {
      firstWord = stringArray[0];

      for (let k = 1; k < stringArray.length; k++) {
        camelString = stringArray[k].charAt(0).toUpperCase() + stringArray[k].substring(1);
        remainingString += camelString;
      } 
      
      return firstWord + remainingString;
    }
  }
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
