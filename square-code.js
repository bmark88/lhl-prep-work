const squareCode = (message) => {
  let originalText = message;
  let text = originalText.split(' ').join('');
  let charPerLine = Math.ceil(Math.sqrt(text.length));
  let squareArray = [];
  let codedString = '';

  // converting original string into squared string within an array
  for (let i = 0; i < text.length; i += charPerLine) {
    squareArray.push(text.substr(i, charPerLine));
  }

  for (let i = 0; i < charPerLine; i++) {
    for (let j = 0; j < squareArray.length; j++) {
      if (squareArray[j][i]) { // removing any undefined (falsy) values if length is shorter than charPerLine
        codedString += squareArray[j][i];
      }
    }
    codedString += ' ';
  }

  return codedString;
};

//console.log(squareCode("chill out"));
//console.log(squareCode("feed the dog"));
//console.log(squareCode("have a nice day"));
//console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));