const conditionalSum = function(values, condition) {
  let evenValues = 0;
  let oddValues = 0;
  if (condition === "even") {
    for (var i = values.length - 1; i >= 0; i--) {
      if (values[i] % 2 === 0) {
        evenValues += values[i];
      }
    } return evenValues;
  } else if (condition === "odd") {
    for (var i = values.length - 1; i >= 0; i--)
      if (values[i] % 2 !== 0) {
        oddValues += values[i];
      }
  } return oddValues;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
