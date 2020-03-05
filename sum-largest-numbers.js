function sortingNumbers(a, b) {
  return a - b;
}

let sumLargestNumbers = function(data) {
  data.reverse(data.sort(sortingNumbers));
  return data[0] + data[1];
}


console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));