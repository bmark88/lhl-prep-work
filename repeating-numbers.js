let repeatNumbers = function(data) {
  let finalStringArray = [];
  let numString;
  
  for (i = 0; i < data.length; i++) {
    numString = data[i][0];

    for (k = 0; k < data[i][1]; k++) {
      numString += data[i][0].toString();
    }
    finalStringArray.push(numString);

  } return finalStringArray.toString();
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));