const urlEncode = function(text) {
  let stringArray = text.split(' ');
  let urlString = '';
  
  for (let i = stringArray.length - 1; i >= 0; i--) {
    if (stringArray[i] == false) {
      stringArray.splice(i, 1);
    } 
  }
  
  for (let i = 0; i < stringArray.length; i++) {
    urlString += stringArray[i] + '%20'
  } return (urlString.substr(0,[urlString.length - 3]));
}



console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));


/*
const array = [2, 5, 9];

console.log(array);

const index = array.indexOf(5);
if (index > -1) {
  array.splice(index, 1);
}

// array = [2, 9]
console.log(array); */