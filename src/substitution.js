// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    //error checking is done FIRST: will return false if no input; no alphabet; or alphabet length < 26; and fginally i used
    //a for loop and the methods index of and lastindexof to see if any characters in the inputted encoded alphabet are being repeated
    if (!input) return false;
    if (!alphabet) return false;
    if (alphabet.length !== 26) return false;
    for (var i = 0; i < alphabet.length; i++) {
      let alph = alphabet[i]
      if (alphabet.indexOf(alph) !== alphabet.lastIndexOf(alph)) {
        return false;
      }
    }
    //only error handling code is present above: working portion of function is present below:

    //the following three blocks of code are setting up variables to work with for all code that follows:
    let message = "";
    const trueAlphabet = "abcdefghijklmnopqrstuvwxyz";
    lowered = input.toLowerCase();
    
    //encoding portion of function:
    if (encode) {
      for (let letter of lowered) {
        if (trueAlphabet.includes(letter)) { //comparing letter value of input message against letters present in actual a-z alphabet
          letterIndex = trueAlphabet.indexOf(letter);
          message += alphabet[letterIndex]; //finding the corrssponding value of input message compared against encoded alphabet and pushing it to message variable
        } else {
          if (letter === " ") { //preserving spacing present in initial input
            message += letter;
          }
        }
      }
      return message;
    }
    //decoding a message
    if (!encode) {
      for (let letter of lowered) {
        if (alphabet.includes(letter)) { //comparing letter value of input message against letters present in encoded alphabet
          letterIndex = alphabet.indexOf(letter);
          message += trueAlphabet[letterIndex]; //finding the corrssponding value of input message compared against ACTUAL a-z alphabet and pushing it to message variable
        } else {
          if (letter === " ") { //preserving spaces present in input
            message += letter;
          }
        }
      }
      return message;
    }
  }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
