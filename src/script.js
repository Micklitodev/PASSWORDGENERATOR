// <------------------------------- Assignment code -------------------------------------->

var generateBtn = document.querySelector("#generate");



// Object to mutate key's values by event functions

let choices = {
  needNum: "",
  needLetter: "",
  needUpper: "",
  needSpecial: "",
  digitQuantity: undefined,
};



// if any object values include 'y' or 'n' clearObjectVals will be executed and firstEvent will be triggered.

function writePassword() {
  if (Object.values(choices).includes("y")) {
    clearObjectVals();
  }
  numsEvent();
}



// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);



// Event to get number decision and reassign object with it then call next decision function letterEvent()

function numsEvent() {
  let num = prompt("Do you need numerical digits?", "y / n");
  if (num != null && (num == "y" || num == "n")) {
    choices.needNum = num;
    letterEvent();
  } else {
    alert("Invalid input, enter y / n");
    numsEvent();
  }
}



// Event to get letter decision and reassign object while it then call next decision function upperEvent()
// if user choice is 'n' function will skip the upperEvent Decision function to specialCharEvent();

function letterEvent() {
  let letter = prompt("Do you need letter digits?", " y / n");
  if (letter != null && letter == "y") {
    choices.needLetter = letter;
    upperEvent();
  } else if (letter != null && letter == "n") {
    choices.needUpper = "no";
    specialCharEvent();
  } else {
    alert("Invalid input, enter y / n");
    letterEvent();
  }
}



// Event to get uppercase decision and reassign object with it then call next decision function specialCharEvent()

function upperEvent() {
  let upper = prompt("Do you need upper case letters?", " y / n");
  if (upper != null && (upper == "y" || upper == "n")) {
    choices.needUpper = upper;
    specialCharEvent();
  } else {
    alert("Invalid input, enter y / n");
    upperEvent();
  }
}



// Event to get special char decision and reassign object with it then call digitLength() func.

function specialCharEvent() {
  let special = prompt("Do you need special characters?", " y / n");
  if (special != null && (special == "y" || special == "n")) {
    choices.needSpecial = special;
    digitLengthEvent();
  } else {
    alert("Invalid input, enter y / n");
    specialCharEvent();
  }
}



// Event to get quantity of digits decision and reassign object with it then call next function generatePassword()

function digitLengthEvent() {
  let digit = prompt(
    "How long do would you like your password to be?",
    "8-128"
  );
  if (digit != null && digit >= 8 && digit <= 128) {
    choices.digitQuantity = digit;
    generatePassword();
  } else {
    alert("Invalid input, please choose a number between 8 - 128");
    digitLengthEvent();
  }
}



// Function that piles the data into a string var based off conditional if statements. dataPiles will be used to store only the
// characters that were selected by the user in the prompt
// then it takes the data and executes it with for loop for as many times as i is less than choices.digitQuantity.
// the code executed to set limitation, will index dataPile randomly by maximum length of the dataPile.

function generatePassword() {
  let password = "";
  let dataPile = "";

  if (choices.needNum == "y") {
    dataPile += "0123456789";
  }
  if (choices.needLetter == "y") {
    dataPile += "abcdefghijklmnopqrstuvwxyz";
  }
  if (choices.needUpper == "y") {
    dataPile += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (choices.needSpecial == "y") {
    dataPile += "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  }
  if (dataPile.length === 0) {
    alert("Please select at least one character type.");
  }

  for (let i = 0; i < choices.digitQuantity; i++) {
    password += dataPile[Math.floor(Math.random() * dataPile.length)];
  }

  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}



// function clears object from mutated values at start of code so that there are not disturbances upon rerunning code.

function clearObjectVals() {
  choices.needNum = "";
  choices.needLetter = "";
  choices.needUpper = "";
  choices.needSpecial = "";
  choices.digitQuantity = undefined;
}





// ---------------------------- Previous failed generatePassword Function ------------------------>

// function generatePassword() {
//   let password = '';
//   let nums = '0123456789';
//   let letters = 'abcdefghijklmnopqrstuvwxyz';
//   let upper = letters.toUpperCase();
//   let symbols = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

//   if (choices.needNum === 'y') {
//     for (let i = 0; i < choices.digitQuantity; i++) {
//       password += nums[Math.floor(Math.random() * 10)];
//     }
//   }
//   if (choices.needLetter === 'y') {
//     for (let i = 0; i < choices.digitQuantity; i++) {
//      password += letters[Math.floor(Math.random() * letters.length)]
//     }
//   }
//   if (choices.needUpper === 'y') {
//     for( let i = 0 ; i < choices.digitQuantity; i++) {
//       password += upper[Math.floor(Math.random() * letters.length)]
//     }
//   }
//   if (choices.needSpecial === 'y') {
//     for(let i = 0; i < choices.digitQuantity; i++ ) {
//       password += symbols[Math.floor(Math.random() * symbols.length)]
//   }
// }

//   return password;
// }

// ~	Tilde.
// !	Exclamation mark, exclamation point, or bang.
// @	Ampersat, arobase, asperand, at, or at symbol.
// #	Octothorpe, number, pound, sharp, or hash.
// $	Dollar sign or generic currency.
// %	Percent.
// ^	Caret or circumflex.
// &	Ampersand, epershand, or and symbol.
// *	Asterisk, mathematical multiplication symbol, and sometimes called a star.
// (	Open or left parenthesis.
// )	Close or right parenthesis.
// -
// _
// +
// =
// {
// }
// |
// :
// ;
// <
// >
// ,
// .
// ?
