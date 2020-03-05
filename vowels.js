let numberOfVowels = function(data) {
  let characters = data.split("");
  let vowels = [];
  let numVowels = [];
  for (i = 0; i < characters.length; i++) {
    if (characters[i] === "a" || characters[i] === "e" || characters[i] === "i" || characters[i] === "o" || characters[i] === "u") {
      vowels += characters[i];
    }
  } return vowels.length;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
