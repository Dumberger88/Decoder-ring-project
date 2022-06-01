// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  //regular polyibus square to use for encoding a message
  const polybiusSquare = {
    "a": "11", "b": "21", "c": "31", "d": "41", "e": "51",
    "f": "12", "g": "22", "h": "32", "i": "42", "j": "42", "k": "52",
    "l": "13", "m": "23", "n": "33", "o": "43", "p": "53",
    "q": "14", "r": "24", "s": "34", "t": "44", "u": "54",
    "v": "15", "w": "25", "x": "35", "y": "45", "z": "55"
  };
  
  //reversed polyibus square to you when decoding a message
  const revPolybiusSquare = {
    "11": "a", "21": "b", "31": "c", "41": "d", "51": "e",
    "12": "f", "22": "g", "32": "h", "42": "i/j", "52": "k",
    "13": "l", "23": "m", "33": "n", "43": "o", "53": "p",
    "14": "q", "24": "r", "34": "s", "44": "t", "54": "u",
    "15": "v", "25": "w", "35": "x", "45": "y", "55": "z"
  };

  function _turnStringToArray(string) {
    return Array.from(string) //helper function that turns an inputted string into an array
   }
  
   //encoding function: converts input to an array and then maps through the array to find its corrsponding numerical value in the regular polyibus square
   //while keeping any spaces and non-alphanumeric characters
  function encodeInput(input) {
    const toArrAndLowered = _turnStringToArray(input.toLowerCase())
    return toArrAndLowered.map(element => {
      if (element === " ") {
        return element
      } else {
        return polybiusSquare[element]
      }
    }).join("")
  }
  
  //decoding function: converts input to an array and then, using the reverse polybius square, converts every other number pair
  //to it's corresponding alphabetical counterpart from the reversed polyibus square
  //this function will maintain spaces and non-alphanumeric characters as well
  function decodeInput(input) {
    const newArr = []
    const toArray = _turnStringToArray(input) //converts input string to array
    for (let i = 0; i < toArray.length; i++) {
      const nums = toArray[i]
      if (nums === " ") { //preserves spaces present in input
        newArr.push(nums)
      } else {
        let tens = nums //first value of every OTHER number in array is set to tens
        let ones = toArray[i + 1]//second value of every OTHER number in array is set to ones
        const combined = tens + ones //combining tens (first index) with ones (second index)
        i = i + 1 //allows me to skip over next index when iterating through array of numbers
        newArr.push(combined)
      } 
    }
    return newArr.map(element => {
      if (element === " ") { //preserving spaces present in initial input
        return element
      } else {
        return revPolybiusSquare[element] //mapping letter values for number keys stored in revPolybiusSquare obj
      }
    }).join("")//joining response together to create a final response string
  }


  function polybius(input, encode = true) {
    // your solution code here
    if (encode === false) {
      if (input.replace(" ", "").length % 2 > 0) { //checking for an even number of presented values--will return false if odd
        return false;
      } else {
        return decodeInput(input);
      }
    }

    if (encode) {
      return encodeInput(input);
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
