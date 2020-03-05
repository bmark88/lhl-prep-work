const urlDecode = (text) => {
  let decodedText = text;
  let keyValuePairs = [];
  let theObject = {};

  decodedText = (decodedText.split('=').join(': ')); // replace all '=' with ': '
  decodedText = decodedText.split('%20').join(' '); // replace all '%20' with ' '
  decodedText = decodedText.split('&').join(', '); // replace all '&' with ', '

  decodedText = decodedText.split(', ');

  // key-value pairs in array form
  for (let i = 0; i < decodedText.length; i++) {
    keyValuePairs.push(decodedText[i].split(': '));
  }

  // converting key-value pair array to object
  for (let j = 0; j < keyValuePairs.length; j++) {
    theObject[keyValuePairs[j][0]] = keyValuePairs[j][1];
  }
  
  return theObject;
};





console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);