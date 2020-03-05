const multiplicationTable = function(maxValue) {
  let row = '';

  for (x = 1; x < maxValue + 1; x++) {
    for (y = 1; y < maxValue + 1; y++) {
      row += (x * y) + ' ';
    } row += '\n';
  }
  return row;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
